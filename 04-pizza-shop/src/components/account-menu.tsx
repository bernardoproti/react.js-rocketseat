import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none"
        >
          Pizza Shop
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Bernardo Proti</span>
          <span className="text-xs font-normal text-muted-foreground">
            bernardo.proti@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="h-4 w-4 mx-2" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="h-4 w-4 mx-2 text-rose-500 dark:text-rose-400" />
          <span className="text-rose-500 dark:text-rose-400">Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
