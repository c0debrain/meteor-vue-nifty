/**
 * Created by livia on 2017/8/23.
 */
// import the router
import { RouterFactory } from 'meteor/akryum:vue-router2'

import FixedFooter from '/imports/ui/FixedFooter.vue'
import Button from '/imports/ui/Button.vue'
import Panels from '/imports/ui/Panels.vue'
import Modals from '/imports/ui/Modals.vue'
import TabsAccordions from '/imports/ui/TabsAccordions.vue'
import AlertsTooltips from '/imports/ui/AlertsTooltips.vue'
import DataTables from '/imports/ui/DataTables.vue'
import FooTables from '/imports/ui/FooTables.vue'
import GeneralForm from '/imports/ui/GeneralForm.vue'
import AdvancedForms from '/imports/ui/AdvancedForms.vue'
import ValidationForm from '/imports/ui/ValidationForm.vue'
import WizardForm from '/imports/ui/WizardForm.vue'

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