import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bell, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
	{ name: "Dashboard", href: "#", current: true },
	{ name: "Reports", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Analytics", href: "#", current: false },
];

const userNavigation = [
	{ name: "Your Profile", href: "#" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
];

function cn(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

function App() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="min-h-full">
				<nav className="dark:bg-gray-800">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 items-center justify-between">
							<div className="flex items-center">
								<div className="shrink-0">
									<img
										className="size-8"
										src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
										alt="Your Company"
									/>
								</div>
								<div className="hidden md:block">
									<div className="ml-10 flex items-baseline space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={cn(
													item.current
														? "bg-gray-900 text-white"
														: "dark:text-gray-300 text-gray-600 hover:bg-gray-700 hover:text-white",
													"rounded-md px-3 py-2 text-sm font-medium",
												)}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>

							<div className="hidden md:block">
								<div className="ml-4 flex items-center md:ml-6">
									<ModeToggle />

									<Button
										variant="ghost"
										size="icon"
										className="relative text-gray-400 hover:text-white"
									>
										<Bell className="size-5" />
									</Button>

									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="ghost" className="relative ml-3">
												<Avatar>
													<AvatarImage src={user.imageUrl} alt={user.name} />
													<AvatarFallback>{user.name[0]}</AvatarFallback>
												</Avatar>
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											{userNavigation.map((item) => (
												<DropdownMenuItem key={item.name}>
													<a href={item.href}>{item.name}</a>
												</DropdownMenuItem>
											))}
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</div>

							<div className="md:hidden">
								<Sheet
									open={isMobileMenuOpen}
									onOpenChange={setIsMobileMenuOpen}
								>
									<SheetTrigger asChild>
										<Button
											variant="ghost"
											size="icon"
											className="text-gray-400"
										>
											{isMobileMenuOpen ? (
												<X className="size-6" />
											) : (
												<MenuIcon className="size-6" />
											)}
										</Button>
									</SheetTrigger>
									<SheetContent side="left" className="w-[300px] bg-gray-800">
										<div className="space-y-4">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className={cn(
														item.current
															? "bg-gray-900 text-white"
															: "text-gray-300 hover:bg-gray-700 hover:text-white",
														"block rounded-md px-3 py-2 text-base font-medium",
													)}
												>
													{item.name}
												</a>
											))}
											<div className="border-t border-gray-700 pt-4">
												<div className="flex items-center px-3">
													<Avatar>
														<AvatarImage src={user.imageUrl} alt={user.name} />
														<AvatarFallback>{user.name[0]}</AvatarFallback>
													</Avatar>
													<div className="ml-3">
														<div className="text-base font-medium text-white">
															{user.name}
														</div>
														<div className="text-sm font-medium text-gray-400">
															{user.email}
														</div>
													</div>
												</div>
											</div>
										</div>
									</SheetContent>
								</Sheet>
							</div>
						</div>
					</div>
				</nav>

				<header className="bg-white shadow-sm dark:bg-gray-800">
					<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
							Dashboard
						</h1>
					</div>
				</header>

				<main>
					<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
						{/* Your content */}
					</div>
				</main>
			</div>
		</ThemeProvider>
	);
}

export default App;
