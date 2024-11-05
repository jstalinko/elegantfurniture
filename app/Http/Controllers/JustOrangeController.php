<?php
namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Contact;
use App\Models\Product;
use App\Models\Testimonial;
use App\Models\Visitor;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Karmendra\LaravelAgentDetector\AgentDetector;

class JustOrangeController extends Controller
{
    private $globals;
    public function __construct()
    {
        $this->globals['setting'] = config('setting');
        $this->globals['base_url'] = url();
        $this->globals['current_url'] = url()->current();
        $this->globals['productForSearch'] = Product::where('active',true)->orderBy('views','desc')->get();
    }
    public function index(): \Inertia\Response
    {
        
        $props['categories'] = Category::where('active', true)->orderBy('id', 'desc')->get();
        $props['products'] = Product::where('active', true)->orderBy('id', 'desc')->get();
        $props['testimonials'] = Testimonial::where('active', true)->orderBy('star', 'desc')->get();
        $this->globals['title'] = config('setting.site_name');
        $this->globals['preloadImages'] = $props['products'];
        $props['globals'] = $this->globals;

        
        $data['props'] = $props;
        return Inertia::render('justorange-default', $data);
    }

    public function product(Request $request): \Inertia\Response
    {
        $props['product'] = Product::where('slug', $request->slug)->with('category')->firstOrFail();
        $props['similiars'] = Product::where('category_id', $props['product']->category_id)->orderBy('views', 'desc')->get();
        $this->globals['title'] = $props['product']->name;
        $this->globals['preloadImages'] = $props['similiars'];
        $props['globals'] = $this->globals;

        $data['props'] = $props;

        return Inertia::render('Product/detail', $data);
    }

    public function category(Request $request): \Inertia\Response
    {
        $category = Category::where('slug', $request->slug)->where('active', true)->firstOrFail();
        $props['products'] = Product::where('category_id', $category->id)->first();
        $props['category'] = $category;
        $props['globals'] = $this->globals;
        


        $data['props'] = $props;

        return Inertia::render('Product/category', $data);
    }
    public function products(Request $request): \Inertia\Response
    {
        $category = Category::where('slug', $request->slug)->where('active', true)->firstOrFail();
        $props['products'] = Product::where('category_id', $category->id)->first();
        $props['category'] = $category;
        $props['globals'] = $this->globals;


        $data['props'] = $props;

        return Inertia::render('Product/index', $data);
    }

    public function productTags(Request $request): \Inertia\Response
    {
        $props['products'] = Product::whereJsonContains('tags',$request->tag)->get();
        $this->globals['title'] = 'Tags #'.$request->tag;
        $this->globals['preloadImages'] = $props['products'];
        $props['globals'] = $this->globals;


        $data['props'] = $props;
        return Inertia::render('Product/index',$data);
    }

    public function updateVisitor(Request $request): JsonResponse
    {
        $ad = new AgentDetector($request->userAgent());
        $req = $request->json()->all();
        Visitor::updateOrCreate(
            ['ip' => $request->ip()],
            [
                'useragent' => $request->userAgent(),
                'browser' => $ad->browser(),
                'platform' => $ad->platform(),
                'device' => $ad->device() . ' ' . $ad->deviceBrand() . ' ' . $ad->deviceModel(),
                'latitude' => $req['lat'],
                'longtitude' => $req['lon'],
                'maps_url' => 'https://maps.google.com/?q=' . $req['lat'], $req['lon'],
            ]
        );

        return response()->json(['success' => true]);
    }

    public function whatsappCheckout(Request $request)
    {
        $product = Product::find($request->id);
        $product->click +=1;
        $product->save();

        $url = url('/product/'.$product->slug);
        $phone = config('setting.number_whatsapp');
        $phone = preg_replace("/^08/","628",$phone);
        $phone = str_replace(['-','_',' '],'',$phone);

        $this->globals['title'] = 'Terimakasih minat anda kepada produk kami';
        $props['globals'] = $this->globals;
        $props['checkout_url'] = "https://wa.me/$phone?text=".urlencode("Hallo, saya tertarik dengan produk ini! \n\n $url");
        $props['categories'] = Category::where('active', true)->orderBy('id', 'desc')->get();
        $props['products'] = Product::where('active', true)->orderBy('id', 'desc')->get();
        $data['props'] = $props;
        return Inertia::render('checkout',$data);
     
     
    }

    public function contact(): \Inertia\Response
    {
        $this->globals['title'] = 'Hubungi Kami';
        $props['globals'] = $this->globals;
              
        $props['categories'] = Category::where('active', true)->orderBy('id', 'desc')->get();
        $props['products'] = Product::where('active', true)->orderBy('id', 'desc')->get();
        $data['props'] = $props;
        return Inertia::render('contact',$data);
    }

    public function about(): \Inertia\Response
    {
        $this->globals['title'] = 'Tentang Kami';

        $props['globals'] = $this->globals;
        $data['props'] = $props;
        return Inertia::render('about',$data);
    }

    public function contactSubmit(Request $request): JsonResponse
    {
        $req = $request->json()->all();

        $contact = new Contact();
        $contact->name = $req['name'];
        $contact->address = $req['address'];
        $contact->message = $req['message'];
        $contact->phone = $req['whatsapp'];
        $contact->save();


        return response()->json(['success' => true , 'data' => $req]);
    }
}
