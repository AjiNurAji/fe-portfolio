import * as React from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Cat } from "lucide-react";
import { Link } from "react-router-dom";

const NavMenu = () => {
	const env = import.meta.env;
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<Link to="/blogs">
							<div className={navigationMenuTriggerStyle()}>
								Blogs
							</div>
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<Link to="/projects">
							<div className={navigationMenuTriggerStyle()}>
								Projects
							</div>
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>About</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<ListItem href="/about-me" title="About Me">
								Telling about me.
							</ListItem>
							<ListItem href="/about-thisme" title="About Thisme">
								Telling about this website.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Contact</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
										<div className="flex gap-1 items-center">
											<Cat />
										</div>
										<div className="mb-2 mt-2 text-lg font-medium capitalize">
											Contact
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											To contact me, you can use one of my
											contacts on the side.
										</p>
									</div>
								</NavigationMenuLink>
							</li>
							<ListItem href={env.VITE_MY_EMAIL} title="Email">
								You can contact me via Email.
							</ListItem>
							<ListItem
								href={env.VITE_MY_INSTAGRAM}
								title="Instagram"
							>
								You can also contact me via Instagram.
							</ListItem>
							<ListItem href="/contact" title="Contact Form">
								and You can also contact me via Contact Form.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, href = "", children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
                    to={href}
					{...props}
				>
					<div className="text-sm font-medium leading-none">
						{title}
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default NavMenu;
