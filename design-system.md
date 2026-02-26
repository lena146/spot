<!-- Design System Overview - White Porcelain Style -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Design System Overview - White Porcelain Style</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#e8c930",
              "background-light": "#f8f8f6",
              "background-dark": "#211e11",
            },
            fontFamily: {
              "display": ["Inter", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .porcelain-shadow {
            box-shadow: 0 4px 20px -2px rgba(24, 23, 17, 0.05);
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4 flex items-center justify-between">
<div class="flex items-center gap-12">
<div class="flex items-center gap-3">
<div class="flex items-center justify-center size-9 bg-primary rounded-lg">
<span class="material-symbols-outlined text-background-dark text-xl">blur_on</span>
</div>
<h2 class="text-xl font-bold tracking-tight">Porcelain <span class="font-normal opacity-60">UI</span></h2>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Foundations</a>
<a class="text-sm font-medium hover:text-primary transition-colors border-b-2 border-primary" href="#">Components</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Patterns</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Resources</a>
</nav>
</div>
<div class="flex items-center gap-4 lg:gap-6">
<div class="relative hidden sm:block">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input class="bg-slate-100 dark:bg-slate-800/50 border-none rounded-lg pl-10 pr-4 py-2 text-sm w-48 lg:w-64 focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Search components..."/>
</div>
<button class="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-background-dark text-sm font-bold transition-transform active:scale-95">
                Download Assets
            </button>
<div class="size-10 rounded-full border-2 border-primary/20 p-0.5 overflow-hidden">
<img class="w-full h-full object-cover rounded-full" data-alt="User profile avatar close up portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxr4tpaT_5g37KWMcb2lv6A8uYLs2eAfoBimSfxFgRa2T2RCUSPN48BKHpMYeSwOPH_d9hllM__mMwUKY4VPTrB3xIHGfHxgSffBtVB_Z12IoimmpvpESdn6LXhH4kdoCIATWuaOe4pC3Ye0kqA3Nj8T1O3S9lHm6BMHleYfj-sxyK57ZZECtmrEXuTeW-DKqWU6zmu7fxo4SWL_h2OeiAjAO92OIQP2oYBJPHS-SJ5N8MCf4j5muS6QyiJwxm_QvZ3rxLRAwTDEU"/>
</div>
</div>
</header>
<main class="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-20 py-12 flex flex-col gap-16">
<!-- Hero Section -->
<section class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 dark:border-slate-800 pb-12">
<div class="max-w-2xl">
<div class="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-4">
<span class="material-symbols-outlined text-sm">verified</span>
                    v2.4.0 Documentation
                </div>
<h1 class="text-5xl lg:text-6xl font-black tracking-tight mb-6">Design System <br/><span class="text-slate-400 font-light">Overview</span></h1>
<p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                    A clean, minimalist aesthetic inspired by the translucent beauty of fine white porcelain. Featuring soft textures, refined shadows, and a signature sunlight yellow accent.
                </p>
</div>
<div class="flex gap-3">
<button class="rounded-lg h-11 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold text-sm transition-colors">Documentation</button>
<button class="rounded-lg h-11 px-6 bg-primary text-background-dark font-bold text-sm shadow-lg shadow-primary/20">Get Started</button>
</div>
</section>
<!-- Color Palette Section -->
<section>
<div class="flex items-center gap-3 mb-8">
<span class="material-symbols-outlined text-primary text-3xl">palette</span>
<h2 class="text-2xl font-bold tracking-tight">01. Color Palette</h2>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
<!-- Color Card -->
<div class="flex flex-col gap-3">
<div class="h-32 w-full rounded-xl bg-primary porcelain-shadow border border-white/20"></div>
<div>
<p class="text-sm font-bold">Porcelain Yellow</p>
<p class="text-xs opacity-50">#E8C930</p>
</div>
</div>
<div class="flex flex-col gap-3">
<div class="h-32 w-full rounded-xl bg-background-light porcelain-shadow border border-slate-200"></div>
<div>
<p class="text-sm font-bold">White Porcelain</p>
<p class="text-xs opacity-50">#F8F8F6</p>
</div>
</div>
<div class="flex flex-col gap-3">
<div class="h-32 w-full rounded-xl bg-slate-200 porcelain-shadow border border-slate-300"></div>
<div>
<p class="text-sm font-bold">Soft Clay</p>
<p class="text-xs opacity-50">#E2E8F0</p>
</div>
</div>
<div class="flex flex-col gap-3">
<div class="h-32 w-full rounded-xl bg-slate-400 porcelain-shadow border border-white/10"></div>
<div>
<p class="text-sm font-bold">Glazed Grey</p>
<p class="text-xs opacity-50">#94A3B8</p>
</div>
</div>
<div class="flex flex-col gap-3">
<div class="h-32 w-full rounded-xl bg-background-dark porcelain-shadow border border-slate-700"></div>
<div>
<p class="text-sm font-bold">Kiln Shadow</p>
<p class="text-xs opacity-50">#211E11</p>
</div>
</div>
<div class="flex flex-col gap-3">
<div class="h-32 w-full rounded-xl bg-slate-900 porcelain-shadow border border-black/10"></div>
<div>
<p class="text-sm font-bold">Ink Wash</p>
<p class="text-xs opacity-50">#0F172A</p>
</div>
</div>
</div>
</section>
<!-- Typography Section -->
<section>
<div class="flex items-center gap-3 mb-8">
<span class="material-symbols-outlined text-primary text-3xl">text_fields</span>
<h2 class="text-2xl font-bold tracking-tight">02. Typography</h2>
</div>
<div class="bg-white dark:bg-slate-800/20 rounded-2xl p-8 lg:p-12 porcelain-shadow border border-slate-100 dark:border-slate-800">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div class="flex flex-col gap-8">
<div>
<p class="text-xs font-bold text-primary mb-2 uppercase tracking-widest">Display Bold</p>
<h3 class="text-4xl font-black">Inter Extra Bold</h3>
<p class="text-slate-500 mt-2">ABCDEFGHIJKLMN OPQRSTUVWXYZ 1234567890</p>
</div>
<div>
<p class="text-xs font-bold text-primary mb-2 uppercase tracking-widest">Headline Medium</p>
<h3 class="text-3xl font-medium">Inter Medium Italic</h3>
<p class="text-slate-500 mt-2 italic">Elegant curves and precise geometric balance.</p>
</div>
</div>
<div class="flex flex-col gap-6">
<p class="text-xs font-bold text-primary uppercase tracking-widest">Body Text Examples</p>
<div class="space-y-4">
<p class="text-lg leading-relaxed font-light">The design system focuses on the negative space, allowing elements to breathe just like the minimalist patterns found on fine pottery.</p>
<p class="text-base leading-relaxed text-slate-600 dark:text-slate-400">Our typography is selected for maximum readability across various digital surfaces. It maintains its character in both light and dark mode implementations.</p>
<p class="text-sm leading-relaxed text-slate-400">Small utility text used for captions, metadata, and fine print documentation.</p>
</div>
</div>
</div>
</div>
</section>
<!-- UI Components Section -->
<section>
<div class="flex items-center gap-3 mb-8">
<span class="material-symbols-outlined text-primary text-3xl">widgets</span>
<h2 class="text-2xl font-bold tracking-tight">03. UI Components</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Buttons & Inputs -->
<div class="bg-white dark:bg-slate-800/20 rounded-2xl p-8 porcelain-shadow border border-slate-100 dark:border-slate-800">
<h3 class="text-sm font-bold uppercase tracking-wider mb-8 text-slate-400">Controls &amp; Inputs</h3>
<div class="flex flex-col gap-8">
<div class="flex flex-wrap gap-4">
<button class="bg-primary text-background-dark font-bold px-6 py-3 rounded-lg text-sm shadow-md transition-all hover:brightness-105 active:scale-95">Primary Action</button>
<button class="bg-slate-100 dark:bg-slate-800 font-semibold px-6 py-3 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">Secondary</button>
<button class="border-2 border-slate-200 dark:border-slate-700 px-6 py-3 rounded-lg text-sm font-semibold hover:border-primary transition-all">Outline</button>
</div>
<div class="space-y-4">
<label class="block text-xs font-bold uppercase tracking-widest text-slate-500">Form Input State</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
<input class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Enter your email..." type="text"/>
</div>
<div class="flex items-center gap-2 text-xs text-primary">
<span class="material-symbols-outlined text-sm">info</span>
<span>Helper text for user guidance</span>
</div>
</div>
<div class="flex items-center gap-6">
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
<span class="ml-3 text-sm font-medium">Toggle Switch</span>
</label>
<div class="flex items-center gap-2">
<input checked="" class="text-primary focus:ring-primary h-4 w-4 border-slate-300" type="radio"/>
<span class="text-sm font-medium">Active Radio</span>
</div>
</div>
</div>
</div>
<!-- Cards & Layouts -->
<div class="bg-white dark:bg-slate-800/20 rounded-2xl p-8 porcelain-shadow border border-slate-100 dark:border-slate-800">
<h3 class="text-sm font-bold uppercase tracking-wider mb-8 text-slate-400">Interactive Cards</h3>
<div class="grid grid-cols-1 gap-6">
<div class="group flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer">
<div class="size-16 rounded-lg overflow-hidden bg-slate-100 shrink-0">
<img class="w-full h-full object-cover" data-alt="Minimalist white vase on wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIGPmQ24UuDnr_w2ZSXP6abkXHFrvuGGNbkNWnL9kQa_EAuquI2bH8UdGtUFxbE8v10ribKEt1ZvsIZFiIYOxvrMjxVSKI1yYtTsFLjItPnIDAZXdTmTZ1DGoOhLY9mul922IR_d7HLA1srzZbhW2Mvpp8Cqx7rkQVx58XcH6bLJIVabxIakKh1E3IbaNrkStVEWwqDEyIva_Bs32mpU4LfZDysVl0TPhzqGvMMv80TEO4_Abd-wqtqEOMoU5hwGgkNguFRK0K6xM"/>
</div>
<div class="flex-1">
<p class="font-bold text-base group-hover:text-primary transition-colors">Premium Glaze Finish</p>
<p class="text-sm text-slate-500">Surface texture exploration v1</p>
</div>
<span class="material-symbols-outlined text-slate-300 group-hover:translate-x-1 group-hover:text-primary transition-all">arrow_forward</span>
</div>
<div class="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col gap-4">
<div class="flex justify-between items-start">
<div class="size-10 rounded-full bg-primary/20 flex items-center justify-center">
<span class="material-symbols-outlined text-primary">analytics</span>
</div>
<span class="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">+12%</span>
</div>
<div>
<h4 class="font-bold">System Performance</h4>
<div class="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
<div class="bg-primary h-full rounded-full" style="width: 75%"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Iconography Section -->
<section>
<div class="flex items-center gap-3 mb-8">
<span class="material-symbols-outlined text-primary text-3xl">token</span>
<h2 class="text-2xl font-bold tracking-tight">04. Iconography</h2>
</div>
<div class="bg-white dark:bg-slate-800/20 rounded-2xl p-8 porcelain-shadow border border-slate-100 dark:border-slate-800">
<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8">
<!-- Icon Item -->
<div class="flex flex-col items-center gap-3">
<div class="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:text-primary hover:border-primary/30 transition-all cursor-help">
<span class="material-symbols-outlined font-thin">home</span>
</div>
<span class="text-[10px] uppercase tracking-tighter text-slate-400">Home</span>
</div>
<div class="flex flex-col items-center gap-3">
<div class="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:text-primary hover:border-primary/30 transition-all">
<span class="material-symbols-outlined font-thin">person</span>
</div>
<span class="text-[10px] uppercase tracking-tighter text-slate-400">User</span>
</div>
<div class="flex flex-col items-center gap-3">
<div class="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:text-primary hover:border-primary/30 transition-all">
<span class="material-symbols-outlined font-thin">settings</span>
</div>
<span class="text-[10px] uppercase tracking-tighter text-slate-400">Setup</span>
</div>
<div class="flex flex-col items-center gap-3">
<div class="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:text-primary hover:border-primary/30 transition-all">
<span class="material-symbols-outlined font-thin">favorite</span>
</div>
<span class="text-[10px] uppercase tracking-tighter text-slate-400">Like</span>
</div>
<div class="flex flex-col items-center gap-3">
<div class="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:text-primary hover:border-primary/30 transition-all">
<span class="material-symbols-outlined font-thin">share</span>
</div>
<span class="text-[10px] uppercase tracking-tighter text-slate-400">Export</span>
</div>
<div class="flex flex-col items-center gap-3">
<div class="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:text-primary hover:border-primary/30 transition-all">
<span class="material-symbols-outlined font-thin">notifications</span>
</div>
<span class="text-[10px] uppercase tracking-tighter text-slate-400">Alert</span>
</div>
<div class="flex flex-col items-center gap-3">
<div class="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:text-primary hover:border-primary/30 transition-all">
<span class="material-symbols-outlined font-thin">calendar_today</span>
</div>
<span class="text-[10px] uppercase tracking-tighter text-slate-400">Event</span>
</div>
<div class="flex flex-col items-center gap-3">
<div class="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:text-primary hover:border-primary/30 transition-all">
<span class="material-symbols-outlined font-thin">cloud_upload</span>
</div>
<span class="text-[10px] uppercase tracking-tighter text-slate-400">Cloud</span>
</div>
<div class="flex flex-col items-center gap-3">
<div class="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:text-primary hover:border-primary/30 transition-all">
<span class="material-symbols-outlined font-thin">lock</span>
</div>
<span class="text-[10px] uppercase tracking-tighter text-slate-400">Secure</span>
</div>
<div class="flex flex-col items-center gap-3">
<div class="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:text-primary hover:border-primary/30 transition-all">
<span class="material-symbols-outlined font-thin">visibility</span>
</div>
<span class="text-[10px] uppercase tracking-tighter text-slate-400">View</span>
</div>
<div class="flex flex-col items-center gap-3">
<div class="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:text-primary hover:border-primary/30 transition-all">
<span class="material-symbols-outlined font-thin">shopping_bag</span>
</div>
<span class="text-[10px] uppercase tracking-tighter text-slate-400">Shop</span>
</div>
<div class="flex flex-col items-center gap-3">
<div class="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:text-primary hover:border-primary/30 transition-all">
<span class="material-symbols-outlined font-thin">more_horiz</span>
</div>
<span class="text-[10px] uppercase tracking-tighter text-slate-400">Misc</span>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="mt-20 border-t border-slate-200 dark:border-slate-800 py-12 px-6 lg:px-20 bg-white dark:bg-slate-900/50">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div class="flex items-center gap-3 opacity-60">
<div class="size-6 bg-slate-300 rounded flex items-center justify-center">
<span class="material-symbols-outlined text-sm">blur_on</span>
</div>
<p class="text-sm font-medium">Porcelain Design System © 2024</p>
</div>
<div class="flex gap-8 text-sm text-slate-500">
<a class="hover:text-primary transition-colors" href="#">Changelog</a>
<a class="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="hover:text-primary transition-colors" href="#">Support</a>
</div>
</div>
</footer>
</div>
</body></html>

<!-- UI Style Guide - Minimalist Yellow Theme -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>UI Style Guide - Minimalist Yellow Theme</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#e8c930",
                        "background-light": "#f8f8f6",
                        "background-dark": "#211e11",
                    },
                    fontFamily: {
                        "display": ["Inter"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
        }
        .porcelain-shadow {
            box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
        }
        .glass-nav {
            backdrop-filter: blur(8px);
            background-color: rgba(255, 255, 255, 0.8);
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
<div class="relative flex h-auto min-screen w-full flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 glass-nav border-b border-slate-200/60 dark:border-slate-800/60 px-6 lg:px-20 py-4">
<div class="max-w-[1400px] mx-auto flex items-center justify-between">
<div class="flex items-center gap-12">
<div class="flex items-center gap-3">
<div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
<span class="material-symbols-outlined text-background-dark text-xl">layers</span>
</div>
<h1 class="text-xl font-bold tracking-tight">Porcelain UI</h1>
</div>
<nav class="hidden md:flex items-center gap-8 text-sm font-medium">
<a class="text-slate-600 hover:text-primary transition-colors" href="#">Documentation</a>
<a class="text-slate-900 border-b-2 border-primary pb-0.5" href="#">Components</a>
<a class="text-slate-600 hover:text-primary transition-colors" href="#">Resources</a>
<a class="text-slate-600 hover:text-primary transition-colors" href="#">Showcase</a>
</nav>
</div>
<div class="flex items-center gap-6">
<div class="relative hidden sm:block">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input class="pl-10 pr-4 py-2 bg-slate-100/50 dark:bg-slate-800/50 border-none rounded-lg text-sm w-64 focus:ring-1 focus:ring-primary/50" placeholder="Quick search..." type="text"/>
</div>
<button class="bg-primary hover:bg-primary/90 text-background-dark px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-sm">
                    v2.0.4
                </button>
<div class="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
<img class="w-full h-full object-cover" data-alt="User profile avatar portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR5r4_s-IAbhuFolsUIpjZYDshfdgIfvvsL06E--BO008FzihRY6SKQ59RjpM550Fxpp77Yh9wtmRwEerWUJp2H74x6X3YO0sezUWG1aiQ6W8wJh3iZCr7socB3i-7Oe5HdPOurvf9BTEooPiz5cEqP0Xk3pHh9503A7C6ndoQ8Mbn7a2dvFRrMc5GZCDf4EtgRIYNp0rySEBaoUQQVLv3P4wvzBlN1DvcVWzH3H_n3r9HA81oNLbIxCtrhHyLXDNrEnlewdKTPBM"/>
</div>
</div>
</div>
</header>
<main class="flex-1 flex max-w-[1400px] mx-auto w-full px-6 lg:px-20 py-10 gap-12">
<!-- Sidebar Navigation -->
<aside class="w-64 hidden lg:block shrink-0">
<div class="flex flex-col gap-8 sticky top-28">
<div>
<h3 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Foundation</h3>
<ul class="space-y-1">
<li><a class="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-white rounded-lg transition-all" href="#"><span class="material-symbols-outlined text-lg">info</span>Introduction</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-white rounded-lg transition-all" href="#"><span class="material-symbols-outlined text-lg">palette</span>Color Palette</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-white rounded-lg transition-all" href="#"><span class="material-symbols-outlined text-lg">text_fields</span>Typography</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-white rounded-lg transition-all" href="#"><span class="material-symbols-outlined text-lg">grid_view</span>Grid &amp; Spacing</a></li>
</ul>
</div>
<div>
<h3 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Components</h3>
<ul class="space-y-1">
<li><a class="flex items-center gap-3 px-3 py-2 text-sm bg-white porcelain-shadow text-slate-900 font-semibold rounded-lg" href="#"><span class="material-symbols-outlined text-lg text-primary">smart_button</span>Buttons</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-white rounded-lg transition-all" href="#"><span class="material-symbols-outlined text-lg">input</span>Form Elements</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-white rounded-lg transition-all" href="#"><span class="material-symbols-outlined text-lg">navigation</span>Navigation</a></li>
<li><a class="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-white rounded-lg transition-all" href="#"><span class="material-symbols-outlined text-lg">credit_card</span>Cards</a></li>
</ul>
</div>
</div>
</aside>
<!-- Main Content Area -->
<div class="flex-1 max-w-4xl">
<section class="mb-16">
<span class="text-primary font-bold tracking-wider text-xs uppercase mb-2 block">System Documentation</span>
<h2 class="text-4xl font-black text-slate-900 dark:text-slate-100 mb-4">The Minimalist Porcelain Theme</h2>
<p class="text-lg text-slate-500 max-w-2xl leading-relaxed">
                    A design language built on the principles of purity, emptiness, and strategic contrast. We use white as a canvas and yellow as the pulse of interaction.
                </p>
</section>
<!-- Buttons Section -->
<section class="mb-20">
<div class="flex items-center gap-4 mb-8">
<h3 class="text-2xl font-bold">Button States</h3>
<div class="h-px flex-1 bg-slate-200"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
<div class="space-y-6">
<p class="text-sm font-medium text-slate-400 uppercase">Primary Actions</p>
<div class="flex flex-wrap gap-4 items-center">
<div class="flex flex-col gap-2">
<button class="bg-primary hover:bg-primary/90 text-background-dark px-8 py-3 rounded-lg font-bold text-sm transition-all">Normal</button>
<span class="text-[10px] text-center text-slate-400 uppercase tracking-tighter">Default</span>
</div>
<div class="flex flex-col gap-2">
<button class="bg-primary/30 text-background-dark/50 px-8 py-3 rounded-lg font-bold text-sm cursor-not-allowed border border-primary/20">Disabled</button>
<span class="text-[10px] text-center text-slate-400 uppercase tracking-tighter">Disabled</span>
</div>
</div>
</div>
<div class="space-y-6">
<p class="text-sm font-medium text-slate-400 uppercase">Outline &amp; Ghost</p>
<div class="flex flex-wrap gap-4 items-center">
<button class="border-2 border-primary text-slate-900 px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/10 transition-all">Outline</button>
<button class="text-slate-600 hover:text-slate-900 px-8 py-3 rounded-lg font-bold text-sm transition-all underline underline-offset-4 decoration-primary decoration-2">Text Link</button>
</div>
</div>
</div>
</section>
<!-- Form Elements -->
<section class="mb-20">
<div class="flex items-center gap-4 mb-8">
<h3 class="text-2xl font-bold">Form Elements</h3>
<div class="h-px flex-1 bg-slate-200"></div>
</div>
<div class="bg-white dark:bg-slate-900/40 p-10 rounded-xl porcelain-shadow border border-slate-100 dark:border-slate-800 space-y-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="space-y-2">
<label class="text-xs font-bold uppercase text-slate-500">Full Name</label>
<input class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 transition-all" placeholder="Enter your name" type="text"/>
</div>
<div class="space-y-2">
<label class="text-xs font-bold uppercase text-slate-500">Email Address</label>
<input class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 transition-all" placeholder="hello@porcelain.ui" type="email"/>
</div>
</div>
<div class="space-y-2">
<label class="text-xs font-bold uppercase text-slate-500">Preferences</label>
<div class="flex flex-wrap gap-6 mt-2">
<label class="flex items-center gap-3 cursor-pointer group">
<div class="w-5 h-5 rounded border-2 border-slate-200 group-hover:border-primary flex items-center justify-center transition-colors">
<div class="w-2.5 h-2.5 bg-primary rounded-sm opacity-0 group-has-[:checked]:opacity-100"></div>
</div>
<input checked="" class="hidden" type="checkbox"/>
<span class="text-sm text-slate-600">Email updates</span>
</label>
<label class="flex items-center gap-3 cursor-pointer group">
<div class="w-5 h-5 rounded-full border-2 border-slate-200 group-hover:border-primary flex items-center justify-center transition-colors">
<div class="w-2.5 h-2.5 bg-primary rounded-full opacity-0 group-has-[:checked]:opacity-100"></div>
</div>
<input checked="" class="hidden" name="r1" type="radio"/>
<span class="text-sm text-slate-600">Light Mode</span>
</label>
</div>
</div>
</div>
</section>
<!-- Spacing & Grid -->
<section class="mb-20">
<div class="flex items-center gap-4 mb-8">
<h3 class="text-2xl font-bold">Spacing &amp; Grid</h3>
<div class="h-px flex-1 bg-slate-200"></div>
</div>
<div class="space-y-12">
<div class="grid grid-cols-4 gap-4">
<div class="h-32 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary text-xs font-bold">1/4</div>
<div class="h-32 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary text-xs font-bold">1/4</div>
<div class="h-32 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary text-xs font-bold">1/4</div>
<div class="h-32 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary text-xs font-bold">1/4</div>
</div>
<div class="space-y-6">
<div class="flex items-center gap-4">
<div class="w-4 h-4 bg-primary"></div>
<code class="text-xs bg-slate-100 px-2 py-1 rounded">4px / 0.25rem - Default Radius</code>
</div>
<div class="flex items-center gap-4">
<div class="w-8 h-8 bg-primary"></div>
<code class="text-xs bg-slate-100 px-2 py-1 rounded">32px / 2rem - Standard Icon Size</code>
</div>
<div class="flex items-center gap-4">
<div class="w-16 h-16 bg-primary"></div>
<code class="text-xs bg-slate-100 px-2 py-1 rounded">64px / 4rem - Component Margin</code>
</div>
</div>
</div>
</section>
<!-- Design Cards -->
<section class="mb-20">
<div class="flex items-center gap-4 mb-8">
<h3 class="text-2xl font-bold">UI Modules</h3>
<div class="h-px flex-1 bg-slate-200"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="group bg-white dark:bg-slate-900 overflow-hidden rounded-xl porcelain-shadow border border-slate-100 dark:border-slate-800 transition-all hover:-translate-y-1">
<div class="h-48 bg-slate-100 overflow-hidden relative">
<img class="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" data-alt="Minimalist desk setup with yellow lamp" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzeOVsC2AK2ot7qDS9PBU84LHM0BUlJd1qBU22OMBtes_AJbtHF40wvmIuJpx9ruRdBV-q3Oz4NOYKW_O9fMB-fFQte-ols0CeEz3UQ4TSSBRm6AVpZjhwRcLdM4ez_BhdQDQLddbQ-9UGvih5L11hTfK5bnyL5o0EUon2HMSw1w_3AtfIO8PL0p8hjvtfckd6PxwHbLwZWLgNiP0uB6Y-X5RVUXEGLj92S2BHyEtgoso-y5mmeXILaYQszW-VkL55DW0r-Y5o03o"/>
<div class="absolute top-4 left-4 bg-primary text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Featured</div>
</div>
<div class="p-6">
<h4 class="font-bold text-lg mb-2">Workspace Inspiration</h4>
<p class="text-sm text-slate-500 leading-relaxed mb-4">How to incorporate primary accents into an otherwise neutral environment for maximum focus.</p>
<div class="flex items-center justify-between">
<span class="text-xs font-bold text-slate-400">MAY 2024</span>
<button class="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
<span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
<div class="bg-primary p-8 rounded-xl flex flex-col justify-between">
<div>
<span class="material-symbols-outlined text-4xl mb-4">format_quote</span>
<p class="text-xl font-medium text-background-dark leading-snug">"Simplicity is the ultimate sophistication. Our design system honors the space between elements."</p>
</div>
<div class="mt-8 flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-background-dark/10"></div>
<div>
<p class="text-sm font-bold text-background-dark">Arlo Vance</p>
<p class="text-xs text-background-dark/60 font-medium">Lead Designer, Porcelain</p>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
<!-- Footer -->
<footer class="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 px-6 lg:px-20 py-12">
<div class="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div class="flex items-center gap-3">
<div class="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
<span class="material-symbols-outlined text-background-dark text-sm">layers</span>
</div>
<span class="text-sm font-bold uppercase tracking-widest">Porcelain UI</span>
</div>
<div class="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
<a class="hover:text-primary transition-colors" href="#">Github</a>
<a class="hover:text-primary transition-colors" href="#">Dribbble</a>
<a class="hover:text-primary transition-colors" href="#">Twitter</a>
<a class="hover:text-primary transition-colors" href="#">Figma</a>
</div>
<p class="text-[10px] text-slate-400 uppercase tracking-tighter">© 2024 Design System Lab. All rights reserved.</p>
</div>
</footer>
</div>
</body></html>