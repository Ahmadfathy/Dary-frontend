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
import { RentPropertiesContent } from './rent-properties-content';

export function RentPropertiesPage() {
    const { settings } = useSettings();

    return (
        <Fragment>
            {settings?.layout === 'demo1' && (
                <Container>
                    <Toolbar>
                        <ToolbarHeading>
                            <ToolbarPageTitle text="كل الايجار" />
                            <ToolbarDescription>كل العقارات المعروضة للايجار</ToolbarDescription>
                        </ToolbarHeading>
                        <ToolbarActions>
                            <Button variant="primary">Add Property</Button>
                        </ToolbarActions>
                    </Toolbar>
                </Container>
            )}
            <Container>
                <RentPropertiesContent />
            </Container>
        </Fragment>
    );
}
