/**
 * Created by livia on 2017/8/23.
 * nifty plugins
 */
import {$} from 'meteor/jquery';

// REQUIRED
// You must include this in your project.
import '/imports/lib/css/bootstrap.min.css'
// bootstrap(window, $)
import '/imports/lib/css/nifty.min.css'
// import '/imports/lib/js/jquery-2.2.4.min.js'

// RECOMMENDED
// This category must be included but you may modify which plugins or components which should be included in your project.
import '/imports/lib/js/bootstrap.min.js'
import '/imports/lib/js/nifty.min.js'

// demo
import '/imports/lib/css/demo/nifty-demo.css'
import '/imports/lib/js/demo/nifty-demo.js'


/* *********************************************************************

 OPTIONAL
 Optional plugins.
*/

// Pace - Page Load Progress Par
// import '/imports/lib/plugins/pace/pace.min.css'
// import '/imports/lib/plugins/pace/pace.min.js'

/* ----------------------------------- icons -------------------------------*/
// Font Awesome  =========== 》 npm install font-awesome
import 'font-awesome/css/font-awesome.min.css'
import '/imports/lib/css/demo/nifty-demo-icons.css'


/* ----------------------------------- Tables -----------------------*/

// DataTables ========== 》  npm install datatables.net-bs
import dataTablesBootstrap from 'datatables.net-bs'
import 'datatables.net-bs/css/dataTables.bootstrap.css'
dataTablesBootstrap(window, $)
import '/imports/lib/plugins/datatables/dataTables.bootstrap.css'
import '/imports/lib/plugins/datatables/dataTables.responsive.css'
// import '/imports/lib/plugins/datatables/media/js/jquery.dataTables.min.js'
// import '/imports/lib/plugins/datatables/media/js/dataTables.bootstrap.js'
// import '/imports/lib/plugins/datatables/extensions/Responsive/js/dataTables.responsive.min.js'

// FooTable
import 'footable'
import '/node_modules/footable/css/footable.core.css'
import '/node_modules/footable/dist/footable.all.min.js'

// Bootstrap Table =========== 》 npm install bootstrap-table
// import '/imports/lib/plugins/bootstrap-table/bootstrap-table.min.css'
// import '/imports/lib/plugins/bootstrap-table/bootstrap-table.min.js'
// import '/imports/lib/plugins/bootstrap-table/extensions/editable/bootstrap-table-editable.min.js'

// X-editable  ========== 》 npm install X-editable
// import '/imports/lib/plugins/x-editable/css/bootstrap-editable.css'
// import '/imports/lib/plugins/x-editable/js/bootstrap-editable.min.js'


/* ----------------------------------- Forms ------------------------*/

// Bootstrap Select
import 'bootstrap-select/dist/css/bootstrap-select.css'
import 'bootstrap-select/dist/js/bootstrap-select.js'

// Bootstrap Tags Input
import 'bootstrap-tagsinput/src/bootstrap-tagsinput.css'
import 'bootstrap-tagsinput/src/bootstrap-tagsinput.js'

// Chosen
import '/imports/lib/plugins/chosen/chosen.min.css'
import '/imports/lib/plugins/chosen/chosen.jquery.min.js'

// Select2
import 'select2/dist/css/select2.css'
import 'select2/dist/js/select2.js'

// Bootstrap TimePicker
import 'bootstrap-timepicker/css/bootstrap-timepicker.min.css'
import 'bootstrap-timepicker/js/bootstrap-timepicker.js'

// Bootstrap DatePicker
// import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css'
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js'
import '/imports/lib/plugins/bootstrap-datepicker/bootstrap-datepicker.min.css'

// Bootstrap Validator  ============ 》 npm i bootstrap-validator
import '/imports/lib/plugins/bootstrap-validator/bootstrapValidator.min.css'
import '/imports/lib/plugins/bootstrap-validator/bootstrapValidator.min.js'

// Bootstrap Wizard
import '/imports/lib/plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js'

// Masked Input  ============ 》 npm i jquery.maskedinput
// import '/imports/lib/plugins/masked-input/jquery.maskedinput.min.js'

// Drop zone  ============ 》 npm install dropzone
// import '/imports/lib/plugins/dropzone/dropzone.min.css'
// import '/imports/lib/plugins/dropzone/dropzone.min.js'

// Summer note ========= 》 npm install summernote
// import '/imports/lib/plugins/summernote/summernote.min.css'
// import '/imports/lib/plugins/summernote/summernote.min.js'

// Bootstrap Markdown  =========== 》 npm i bootstrap-markdown
// import '/imports/lib/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css'
// import '/imports/lib/plugins/bootstrap-markdown/js/markdown.js'
// import '/imports/lib/plugins/bootstrap-markdown/js/to-markdown.js'
// import '/imports/lib/plugins/bootstrap-markdown/js/bootstrap-markdown.js'

// Magic Checkbox  ========== > npm install --save magic-check √
// import 'magic-check/css/magic-check.min.css'
// import '/imports/lib/plugins/magic-check/css/magic-check.min.css'

// Switchery  ========= 》 npm install switchery   ?  √
// import 'switchery/standalone/switchery.css'
// import 'switchery/standalone/switchery.js'
// import '/imports/lib/plugins/switchery/switchery.min.css'
// import '/imports/lib/plugins/switchery/switchery.js'

// noUiSlider ?
// import '/imports/lib/plugins/noUiSlider/nouislider.min.css'
// import '/imports/lib/plugins/noUiSlider/nouislider.min.js'


/* ----------------------------------- Charts -----------------------*/
// Morris ???
// import '/imports/lib/plugins/morris-js/morris.min.css'
// import '/imports/lib/plugins/morris-js/morris.min.js'
// import '/imports/lib/plugins/morris-js/raphael-js/raphael.min.js'

//......

/* ----------------------------------- Miscellaneous -----------------------*/
// Full Calendar ???
// import '/imports/lib/plugins/fullcalendar/fullcalendar.min.css'
// import '/imports/lib/plugins/fullcalendar/nifty-skin/fullcalendar-nifty.min.css'
// import '/imports/lib/plugins/fullcalendar/lib/moment.min.js'
// import '/imports/lib/plugins/fullcalendar/lib/jquery-ui.custom.min.js'
// import '/imports/lib/plugins/fullcalendar/fullcalendar.min.js'


/* ---------------------------------- widgets 小部件 -----------------*/
// Flot Chart
// import '/imports/lib/plugins/flot-charts/jquery.flot.min.js'
// import '/imports/lib/plugins/flot-charts/jquery.flot.resize.min.js'
//
// // Gauge js
// import '/imports/lib/plugins/gauge-js/gauge.min.js'
// // Skycons
// import '/imports/lib/plugins/skycons/skycons.min.js'
// // Easy Pie Chart
// import '/imports/lib/plugins/easy-pie-chart/jquery.easypiechart.min.js'


/* ----------------------------------- UI Elements ------------------*/

// Animate   ========= >  npm install animate.css --save √
// import 'animate.css'
// import '/imports/lib/plugins/animate-css/animate.min.css'

// Bootbox Modals  ========== > npm install bootbox  √
// import bootbox from 'bootbox/bootbox.js'
// // bootBox(window, $)
// import '/imports/lib/plugins/bootbox/bootbox.min.js'
