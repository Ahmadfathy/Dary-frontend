import { useCallback, useMemo } from 'react';
import {
  Badge,
  ChevronDown,
  FileText,
  Settings,
  SquareCode,
  UserCircle,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  AccordionMenu,
  AccordionMenuClassNames,
  AccordionMenuGroup,
  AccordionMenuItem,
  AccordionMenuLabel,
} from '@/components/ui/accordion-menu';
import { useLanguage } from '@/providers/i18n-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DropdownItem {
  title: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
}

interface MenuItem {
  title: string;
  path?: string;
  active?: boolean;
}

interface MenuLabel {
  label: string;
}

type MenuNode = MenuItem | MenuLabel;

export function SidebarMenuDashboard() {
  const { pathname } = useLocation();
  const { t } = useLanguage();

  const dropdownItems: DropdownItem[] = [
    {
      title: t('Client API'),
      path: '/account/home/user-profile',
      icon: SquareCode,
      active: true,
    },
    {
      title: t('Profile'),
      path: '/public-profile/profiles/company',
      icon: UserCircle,
    },
    {
      title: t('My Account'),
      path: '/account/integrations',
      icon: Settings,
    },
    {
      title: t('Projects'),
      path: '/public-profile/projects/3-columns',
      icon: FileText,
    },
    {
      title: t('Personal info'),
      path: '/public-profile/profiles/creator',
      icon: Badge,
    },
  ];

  const currentDropdownItem = dropdownItems[0];

  const menuItems = useMemo<MenuNode[]>(
    () => [
      { label: t('Configuration') },
      { title: t('API Setup'), path: '/account/api-keys' },
      { title: t('Team Settings'), path: '/account/home/settings-sidebar' },
      { title: t('Authentication'), path: '/authentication/classic/sign-in' },
      { title: t('Endpoints Configs'), path: '/account/appearance' },
      { title: t('Rate Limiting'), path: '/public-profile/network' },
      { label: t('Security') },
      { title: t('Data Encryption'), path: '/account/billing/enterprise' },
      { title: t('Text'), path: '/account/security/overview' },
      { title: t('Access Control'), path: '/account/security/privacy-settings' },
      { label: t('Analytics') },
      {
        title: t('Incident Response'),
        path: '/account/security/current-sessions',
      },
      { title: t('Fetching Data'), path: '/account/members/team-info' },
      { title: t('Custom Reports'), path: '/account/home/user-profile' },
      {
        title: t('Real Time Analytics'),
        path: '/account/home/settings-enterprise',
      },
      { title: t('Exporting Data'), path: '/account/members/import-members' },
      { title: t('Dashboard Integration'), path: '/account/members/team-info' },
    ],
    [],
  );

  const classNames: AccordionMenuClassNames = {
    root: 'space-y-1',
    label:
      'uppercase text-xs font-medium text-muted-foreground/80 pt-6 mb-2 pb-0',
    item: 'h-8 hover:bg-background border-accent text-accent-foreground hover:text-primary data-[selected=true]:text-primary data-[selected=true]:bg-background data-[selected=true]:font-medium',
  };

  const matchPath = useCallback(
    (path: string): boolean =>
      path === pathname || (path.length > 1 && pathname.startsWith(path)),
    [pathname],
  );

  const buildDropdown = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            mode="input"
            className="w-full justify-between"
          >
            <span className="flex items-center gap-2">
              <currentDropdownItem.icon />
              {currentDropdownItem.title}
            </span>
            <ChevronDown className="size-3.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)">
          {dropdownItems.map((item, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link to={item.path}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  const buildMenu = () => {
    return (
      <AccordionMenu
        selectedValue={'/account/home/settings-sidebar'}
        matchPath={matchPath}
        type="single"
        collapsible
        classNames={classNames}
      >
        <AccordionMenuGroup>
          {menuItems.map((item, index) =>
            'label' in item ? (
              <AccordionMenuLabel key={index}>{item.label}</AccordionMenuLabel>
            ) : (
              <AccordionMenuItem
                key={index}
                value={item.path || `item-${index}`}
                className="text-sm"
              >
                <Link to={item.path || '#'}>{item.title}</Link>
              </AccordionMenuItem>
            ),
          )}
        </AccordionMenuGroup>
      </AccordionMenu>
    );
  };

  return (
    <div className="w-full space-y-1">
      {buildDropdown()}
      {buildMenu()}
    </div>
  );
}
