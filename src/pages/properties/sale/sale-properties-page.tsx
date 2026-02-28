import { Fragment } from 'react';
import {
    Toolbar,
    ToolbarActions,
    ToolbarDescription,
    ToolbarHeading,
    ToolbarPageTitle,
} from '@/partials/common/toolbar';
import { useSettings } from '@/providers/settings-provider';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/container';
import { SalePropertiesContent } from './sale-properties-content';

export function SalePropertiesPage() {
    const { settings } = useSettings();

    return (
        <Fragment>
            {settings?.layout === 'demo1' && (
                <Container>
                    <Toolbar>
                        <ToolbarHeading>
                            <ToolbarPageTitle text="كل التمليك" />
                            <ToolbarDescription>كل العقارات المعروضة للبيع</ToolbarDescription>
                        </ToolbarHeading>
                        <ToolbarActions>
                            <Button variant="primary">Add Property</Button>
                        </ToolbarActions>
                    </Toolbar>
                </Container>
            )}
            <Container>
                <SalePropertiesContent />
            </Container>
        </Fragment>
    );
}
