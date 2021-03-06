/**
 * Created by livia on 2017/8/23.
 */
// import the router
import { RouterFactory } from 'meteor/akryum:vue-router2'

import FixedFooter from '/imports/ui/pages/FixedFooter.vue'
import Button from '/imports/ui/pages/Button.vue'
import Panels from '/imports/ui/pages/Panels.vue'
import Modals from '/imports/ui/pages/Modals.vue'
import TabsAccordions from '/imports/ui/pages/TabsAccordions.vue'
import AlertsTooltips from '/imports/ui/pages/AlertsTooltips.vue'
import DataTables from '/imports/ui/pages/DataTables.vue'
import FooTables from '/imports/ui/pages/FooTables.vue'
import GeneralForm from '/imports/ui/pages/GeneralForm.vue'
import AdvancedForms from '/imports/ui/pages/AdvancedForms.vue'
import ValidationForm from '/imports/ui/pages/ValidationForm.vue'
import WizardForm from '/imports/ui/pages/WizardForm.vue'

RouterFactory.configure(factory => {
    // Simple routes
    factory.addRoutes([
        {
            path: '/fixed-footer',
            component: FixedFooter
        },
        {
            path: '/button',
            component: Button
        },
        {
            path: '/panels',
            component: Panels
        },
        {
            path: '/modals',
            component: Modals
        },
        {
            path: '/tabsAccordions',
            component: TabsAccordions
        },
        {
            path: '/alertsTooltips',
            component: AlertsTooltips
        },
        {
            path: '/dataTables',
            component: DataTables
        },
        {
            path: '/fooTables',
            component: FooTables
        },
        {
            path: '/generalForm',
            component: GeneralForm
        },
        {
            path: '/advancedForms',
            component: AdvancedForms
        },
        {
            path: '/validationForm',
            component: ValidationForm
        },
        {
            path: '/wizardForm',
            component: WizardForm
        },
    ])
})