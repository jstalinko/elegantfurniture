<!DOCTYPE html>
<html data-theme="dracula">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0">
    <meta name="csrf_token" content="{{ csrf_token() }}">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
    <link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF">
    <meta name="theme-color" content="#ffffff">
    <meta name="title" content="{{ config('setting.site_name') }} - {{ config('setting.site_description') }}" />
    <meta name="description" content="{{ config('setting.site_description') }}" />
    <meta name="keywords" content="{{ config('setting.site_keywords') }}" />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="Indonesia,English" />
    <meta name="revisit-after" content="1 days" />
    <meta name="author" content="{{ config('setting.site_name') }}" />
    <!-- opengraph facebook meta -->
    <meta property="og:title" content="{{ config('setting.site_name') }} - {{ config('setting.site_description') }}" />
    <meta property="og:description" content="{{ config('setting.site_description') }}" />
    <meta property="og:image" content="{{ url('storage/' . config('setting.icon')) }}" />
    <meta property="og:url" content="{{ url('/') }}" />
    <!-- X meta -->
    <meta name="twitter:title"
        content="{{ config('setting.site_name') }} - {{ config('setting.site_description') }}" />
    <meta name="twitter:description" content="{{ config('setting.site_description') }}" />
    <meta name="twitter:url" content="{{ url('/') }}" />
    <meta name="twitter:card" content="summary" />


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Lobster&family=Playwrite+DE+Grund:wght@100..400&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css">

    <style>
        .ubuntu-light {
            font-family: "Ubuntu", sans-serif;
            font-weight: 300;
            font-style: normal;
        }

        .ubuntu-regular {
            font-family: "Ubuntu", sans-serif;
            font-weight: 400;
            font-style: normal;
        }

        .ubuntu-medium {
            font-family: "Ubuntu", sans-serif;
            font-weight: 500;
            font-style: normal;
        }

        .ubuntu-bold {
            font-family: "Ubuntu", sans-serif;
            font-weight: 700;
            font-style: normal;
        }

        .ubuntu-light-italic {
            font-family: "Ubuntu", sans-serif;
            font-weight: 300;
            font-style: italic;
        }

        .ubuntu-regular-italic {
            font-family: "Ubuntu", sans-serif;
            font-weight: 400;
            font-style: italic;
        }

        .ubuntu-medium-italic {
            font-family: "Ubuntu", sans-serif;
            font-weight: 500;
            font-style: italic;
        }

        .ubuntu-bold-italic {
            font-family: "Ubuntu", sans-serif;
            font-weight: 700;
            font-style: italic;
        }

        .playwrite-de-grund {
            font-family: "Playwrite DE Grund", cursive;
            font-optical-sizing: auto;
            font-style: normal;
        }

        .lobster-regular {
            font-family: "Lobster", sans-serif;
            font-weight: 400;
            font-style: normal;
        }

        h1 {
            font-family: "Lobster", sans-serif;
            font-weight: 500;
            font-style: bold;
        }

        h2 {
            font-family: "Playwrite DE Grund", cursive;
            font-weight: 200;
        }

        p,
        div,
        span {
            font-family: "Ubuntu", sans-serif;
        }
    </style>
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')
    @inertiaHead
</head>

<body>

    @inertia
</body>

</html>
