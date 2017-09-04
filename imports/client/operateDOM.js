/**
 * Created by livia on 2017/8/25.
 */

$(document).ready(function () {

    // navigation style
    // =================================================================
    navigationOperate();

});

function navigationOperate() {
    let pRouteActive = $('.router-link-active')[0].parentNode
    pRouteActive.classList.add('active-link')
    if (pRouteActive.parentNode.classList.contains('collapse')) {
        pRouteActive.parentNode.classList.add('in')
        pRouteActive.parentNode.parentNode.classList.add('active-sub')
    }
    $('#mainnav-menu').click(function () {
        let routeActiveLink = $('.router-link-active')[0].parentNode;
        let activeLink = $('.active-link');
        let activeTab = $('.active-sub')

        if (activeLink.length) {
            activeLink[0].classList.remove('active-link')
            if (activeLink[0].parentNode.classList.contains('collapse')) {
                activeLink[0].parentNode.classList.remove('in')
                activeLink[0].parentNode.parentNode.classList.remove('active-sub')
            }
        }
        if (activeTab.length) {
            activeTab[0].classList.remove('active-sub')
        }
        routeActiveLink.classList.add('active-link')
        if (routeActiveLink.parentNode.classList.contains('collapse')) {
            routeActiveLink.parentNode.classList.add('in')
            routeActiveLink.parentNode.parentNode.classList.add('active-sub')
        }
    })
}

function dataTablesOperate() {

    $.fn.DataTable.ext.pager.numbers_length = 8;

    // Basic Data Tables with responsive plugin
    // -----------------------------------------------------------------
    $('#demo-dt-basic').dataTable( {
        "responsive": true,
        "language": {
            "paginate": {
                "previous": '<i class="demo-psi-arrow-left"></i>',
                "next": '<i class="demo-psi-arrow-right"></i>'
            }
        }
    } );


    // Row selection (single row)
    // -----------------------------------------------------------------
    var rowSelection = $('#demo-dt-selection').DataTable({
        "responsive": true,
        "language": {
            "paginate": {
                "previous": '<i class="demo-psi-arrow-left"></i>',
                "next": '<i class="demo-psi-arrow-right"></i>'
            }
        }
    });

    $('#demo-dt-selection').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            rowSelection.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );


    // Row selection and deletion (multiple rows)
    // -----------------------------------------------------------------
    var rowDeletion = $('#demo-dt-delete').DataTable({
        "responsive": true,
        "language": {
            "paginate": {
                "previous": '<i class="demo-psi-arrow-left"></i>',
                "next": '<i class="demo-psi-arrow-right"></i>'
            }
        },
        "dom": '<"toolbar">frtip'
    });
    $('#demo-custom-toolbar').appendTo($("div.toolbar"));

    $('#demo-dt-delete tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    } );

    $('#demo-dt-delete-btn').click( function () {
        rowDeletion.row('.selected').remove().draw( false );
    } );
}

function fooTablesOperate() {
    // Row Toggler
    // -----------------------------------------------------------------
    $('#demo-foo-row-toggler').footable();

    // Expand / Collapse All Rows
    // -----------------------------------------------------------------
    var fooColExp = $('#demo-foo-col-exp');
    fooColExp.footable().trigger('footable_expand_first_row');


    $('#demo-foo-collapse').on('click', function(){
        fooColExp.trigger('footable_collapse_all');
    });
    $('#demo-foo-expand').on('click', function(){
        fooColExp.trigger('footable_expand_all');
    })

    // Accordion
    // -----------------------------------------------------------------
    $('#demo-foo-accordion').footable().on('footable_row_expanded', function(e) {
        $('#demo-foo-accordion tbody tr.footable-detail-show').not(e.row).each(function() {
            $('#demo-foo-accordion').data('footable').toggleDetail(this);
        });
    });

    // Pagination
    // -----------------------------------------------------------------
    $('#demo-foo-pagination').footable();
    $('#demo-show-entries').change(function (e) {
        e.preventDefault();
        var pageSize = $(this).val();
        $('#demo-foo-pagination').data('page-size', pageSize);
        $('#demo-foo-pagination').trigger('footable_initialized');
    });

    // Filtering
    // -----------------------------------------------------------------
    var filtering = $('#demo-foo-filtering');
    filtering.footable().on('footable_filtering', function (e) {
        var selected = $('#demo-foo-filter-status').find(':selected').val();
        e.filter += (e.filter && e.filter.length > 0) ? ' ' + selected : selected;
        e.clear = !e.filter;
    });

    // Filter status
    $('#demo-foo-filter-status').change(function (e) {
        e.preventDefault();
        filtering.trigger('footable_filter', {filter: $(this).val()});
    });

    // Search input
    $('#demo-foo-search').on('input', function (e) {
        e.preventDefault();
        filtering.trigger('footable_filter', {filter: $(this).val()});
    });


    // Add & Remove Row
    // -----------------------------------------------------------------
    var addrow = $('#demo-foo-addrow');
    addrow.footable().on('click', '.demo-delete-row', function() {

        //get the footable object
        var footable = addrow.data('footable');

        //get the row we are wanting to delete
        var row = $(this).parents('tr:first');

        //delete the row
        footable.removeRow(row);
    });

    // Search input
    $('#demo-input-search2').on('input', function (e) {
        e.preventDefault();
        addrow.trigger('footable_filter', {filter: $(this).val()});
    });

    // Add Row Button
    $('#demo-btn-addrow').click(function() {

        //get the footable object
        var footable = addrow.data('footable');

        //build up the row we are wanting to add
        var newRow = '<tr><td><button class="demo-delete-row btn btn-danger btn-xs"><i class="pli-cross"></i></button></td><td>Adam</td><td>Doe</td><td>Traffic Court Referee</td><td>22 Jun 1972</td><td><span class="label label-table label-success">Active</span></td></tr>';

        //add it
        footable.appendRow(newRow);
    });
}

function panelOperate() {

    // PANEL WITH BUTTONS - LOADING OVERLAY
    $('.demo-panel-ref-btn').niftyOverlay().on('click', function(){
        var $el = $(this), relTime;
        $el.niftyOverlay('show');

        // Do something...

        relTime = setInterval(function(){
            // Hide the screen overlay
            $el.niftyOverlay('hide');

            clearInterval(relTime);
        },2000);
    });

    // PANEL WITH VARIETY OF COMPONENTS - DEMO AUTO CLOSE ALERTS
    // =================================================================
    $('#demo-panel-alert').on('click', function(){
        $.niftyNoty({
            type: 'primary',
            container : '#demo-panel-w-alert',
            html : '<strong>Well done!</strong> You successfully read this important alert message.',
            focus: false,
            timer : 2000
        });
    });

    // PANEL WITH VARIETY OF COMPONENTS - DEMO STICKY ALERTS
    // =================================================================
    $('#demo-panel-alert2').on('click', function(){
        $.niftyNoty({
            type: 'warning',
            container : '#demo-panel-w-alert',
            html : '<strong>Well done!</strong> You successfully read this important alert message.',
            focus: false
        });
    });

}

function chosenOperate() {

    $('#demo-chosen-select').chosen();
    $('#demo-cs-multiselect').chosen({width:'100%'});
}

function select2Operate() {
    // SELECT2 SINGLE
    // =================================================================
    $("#demo-select2").select2();

    // SELECT2 PLACEHOLDER
    // =================================================================
    $("#demo-select2-placeholder").select2({
        placeholder: "Select a state",
        allowClear: true
    });

    // SELECT2 SELECT BOXES
    // =================================================================
    $("#demo-select2-multiple-selects").select2();
}

function datePickerOperate() {

    $('#demo-dp-txtinput input').datepicker();

    // BOOTSTRAP DATEPICKER WITH AUTO CLOSE
    // =================================================================
    $('#demo-dp-component .input-group.date').datepicker({autoclose:true});

    // BOOTSTRAP DATEPICKER WITH RANGE SELECTION
    // =================================================================
    $('#demo-dp-range .input-daterange').datepicker({
        format: "MM dd, yyyy",
        todayBtn: "linked",
        autoclose: true,
        todayHighlight: true
    });

    // INLINE BOOTSTRAP DATEPICKER
    // =================================================================
    $('#demo-dp-inline div').datepicker({
        format: "MM dd, yyyy",
        todayBtn: "linked",
        autoclose: true,
        todayHighlight: true
    });

}

function timePickerOperate() {

    $('#demo-tp-com').timepicker();

    // BOOTSTRAP TIMEPICKER - COMPONENT\
    // =================================================================
    $('#demo-tp-textinput').timepicker({
        minuteStep: 5,
        showInputs: false,
        disableFocus: true
    });
}

//todo: 待拆分
function formWizard() {

    // FORM WIZARD
    // =================================================================

    // MAIN FORM WIZARD
    // =================================================================
    $('#demo-main-wz').bootstrapWizard({
        tabClass		: 'wz-steps',
        nextSelector	: '.next',
        previousSelector	: '.previous',
        onTabClick: function(tab, navigation, index) {
            return false;
        },
        onInit : function(){
            $('#demo-main-wz').find('.finish').hide().prop('disabled', true);
        },
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            var wdt = 100/$total;
            var lft = wdt*index;

            $('#demo-main-wz').find('.progress-bar').css({width:wdt+'%',left:lft+"%", 'position':'relative', 'transition':'all .5s'});


            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $('#demo-main-wz').find('.next').hide();
                $('#demo-main-wz').find('.finish').show();
                $('#demo-main-wz').find('.finish').prop('disabled', false);
            } else {
                $('#demo-main-wz').find('.next').show();
                $('#demo-main-wz').find('.finish').hide().prop('disabled', true);
            }
        }
    });

    // CLASSIC STYLE
    // =================================================================
    $('#demo-cls-wz').bootstrapWizard({
        tabClass		: 'wz-classic',
        nextSelector	: '.next',
        previousSelector	: '.previous',
        onTabClick: function(tab, navigation, index) {
            return false;
        },
        onInit : function(){
            $('#demo-cls-wz').find('.finish').hide().prop('disabled', true);
        },
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            var wdt = 100/$total;
            var lft = wdt*index;
            $('#demo-cls-wz').find('.progress-bar').css({width:$percent+'%'});

            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $('#demo-cls-wz').find('.next').hide();
                $('#demo-cls-wz').find('.finish').show();
                $('#demo-cls-wz').find('.finish').prop('disabled', false);
            } else {
                $('#demo-cls-wz').find('.next').show();
                $('#demo-cls-wz').find('.finish').hide().prop('disabled', true);
            }
        }
    });

    // BUBBLE NUMBERS
    // =================================================================
    $('#demo-step-wz').bootstrapWizard({
        tabClass		: 'wz-steps',
        nextSelector	: '.next',
        previousSelector	: '.previous',
        onTabClick: function(tab, navigation, index) {
            return false;
        },
        onInit : function(){
            $('#demo-step-wz').find('.finish').hide().prop('disabled', true);
        },
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = (index/$total) * 100;
            var wdt = 100/$total;
            var lft = wdt*index;
            var margin = (100/$total)/2;
            $('#demo-step-wz').find('.progress-bar').css({width:$percent+'%', 'margin': 0 + 'px ' + margin + '%'});


            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $('#demo-step-wz').find('.next').hide();
                $('#demo-step-wz').find('.finish').show();
                $('#demo-step-wz').find('.finish').prop('disabled', false);
            } else {
                $('#demo-step-wz').find('.next').show();
                $('#demo-step-wz').find('.finish').hide().prop('disabled', true);
            }
        }
    });

    // FORM WIZARD WITH TOOLTIP
    // =================================================================
    $('#demo-cir-wz').bootstrapWizard({
        tabClass		    : 'wz-steps',
        nextSelector	    : '.next',
        previousSelector    : '.previous',
        onTabClick: function(tab, navigation, index) {
            return false;
        },
        onInit : function(){
            $('#demo-cir-wz').find('.finish').hide().prop('disabled', true);
        },
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = (index/$total) * 100;
            var margin = (100/$total)/2;
            $('#demo-cir-wz').find('.progress-bar').css({width:$percent+'%', 'margin': 0 + 'px ' + margin + '%'});

            navigation.find('li:eq('+index+') a').trigger('focus');


            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $('#demo-cir-wz').find('.next').hide();
                $('#demo-cir-wz').find('.finish').show();
                $('#demo-cir-wz').find('.finish').prop('disabled', false);
            } else {
                $('#demo-cir-wz').find('.next').show();
                $('#demo-cir-wz').find('.finish').hide().prop('disabled', true);
            }
        }
    })

    // FORM WIZARD WITH VALIDATION
    // =================================================================
    $('#demo-bv-wz').bootstrapWizard({
        tabClass		    : 'wz-steps',
        nextSelector	    : '.next',
        previousSelector	: '.previous',
        onTabClick          : function(tab, navigation, index) {
            return false;
        },
        onInit : function(){
            $('#demo-bv-wz').find('.finish').hide().prop('disabled', true);
        },
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            var wdt = 100/$total;
            var lft = wdt*index;

            $('#demo-bv-wz').find('.progress-bar').css({width:wdt+'%',left:lft+"%", 'position':'relative', 'transition':'all .5s'});

            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $('#demo-bv-wz').find('.next').hide();
                $('#demo-bv-wz').find('.finish').show();
                $('#demo-bv-wz').find('.finish').prop('disabled', false);
            } else {
                $('#demo-bv-wz').find('.next').show();
                $('#demo-bv-wz').find('.finish').hide().prop('disabled', true);
            }
        },
        onNext: function(){
            isValid = null;
            $('#demo-bv-wz-form').bootstrapValidator('validate');


            if(isValid === false)return false;
        }
    });


    // FORM VALIDATION
    // =================================================================
    var isValid;
    $('#demo-bv-wz-form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'fa fa-check-circle fa-lg text-success',
            invalid: 'fa fa-times-circle fa-lg',
            validating: 'fa fa-refresh'
        },
        fields: {
            username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required.'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and can\'t be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[A-Z\s]+$/i,
                        message: 'The first name can only consist of alphabetical characters and spaces'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[A-Z\s]+$/i,
                        message: 'The last name can only consist of alphabetical characters and spaces'
                    }
                }
            },
            phoneNumber: {
                validators: {
                    notEmpty: {
                        message: 'The phone number is required and cannot be empty'
                    },
                    digits: {
                        message: 'The value can contain only digits'
                    }
                }
            },
            address: {
                validators: {
                    notEmpty: {
                        message: 'The address is required'
                    }
                }
            }
        }
    }).on('success.field.bv', function(e, data) {
        // $(e.target)  --> The field element
        // data.bv      --> The BootstrapValidator instance
        // data.field   --> The field name
        // data.element --> The field element

        var $parent = data.element.parents('.form-group');

        // Remove the has-success class
        $parent.removeClass('has-success');

        // Hide the success icon
        //$parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]').hide();
    }).on('error.form.bv', function(e) {
        isValid = false;
    });

}

//todo: 待拆分
function formValidation() {

    // FORM VALIDATION
    // =================================================================

    // FORM VALIDATION FEEDBACK ICONS
    // =================================================================
    var faIcon = {
        valid: 'fa fa-check-circle fa-lg text-success',
        invalid: 'fa fa-times-circle fa-lg',
        validating: 'fa fa-refresh'
    }

    // FORM VALIDATION ON TABS
    // =================================================================
    $('#demo-bv-bsc-tabs').bootstrapValidator({
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            fullName: {
                validators: {
                    notEmpty: {
                        message: 'The full name is required'
                    }
                }
            },
            company: {
                validators: {
                    notEmpty: {
                        message: 'The company name is required'
                    }
                }
            },
            memberType: {
                validators: {
                    notEmpty: {
                        message: 'Please choose the membership type that best meets your needs'
                    }
                }
            },
            address: {
                validators: {
                    notEmpty: {
                        message: 'The address is required'
                    }
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: 'The city is required'
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: 'The city is required'
                    }
                }
            }
        }
    }).on('status.field.bv', function(e, data) {
        var $form     = $(e.target),
            validator = data.bv,
            $tabPane  = data.element.parents('.tab-pane'),
            tabId     = $tabPane.attr('id');

        if (tabId) {
            var $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i');

            // Add custom class to tab containing the field
            if (data.status == validator.STATUS_INVALID) {
                $icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
            } else if (data.status == validator.STATUS_VALID) {
                var isValidTab = validator.isValidContainer($tabPane);
                $icon.removeClass(faIcon.valid).addClass(isValidTab ? faIcon.valid : faIcon.invalid);
            }
        }
    });

    // FORM VALIDATION ON ACCORDION
    // =================================================================
    $('#demo-bv-accordion').bootstrapValidator({
        message: 'This value is not valid',
        excluded: ':disabled',
        feedbackIcons: faIcon,
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[A-Z\s]+$/i,
                        message: 'The first name can only consist of alphabetical characters and spaces'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[A-Z\s]+$/i,
                        message: 'The last name can only consist of alphabetical characters and spaces'
                    }
                }
            },
            username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    },
                    stringLength: {
                        min: 4,
                        max: 30,
                        message: 'The username must be more than 4 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    },
                    different: {
                        field: 'password',
                        message: 'The username and password cannot be the same as each other'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username'
                    }
                }
            },
            memberType: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            bio:{
                validators: {
                    notEmpty: {
                        message: 'The bio is required and cannot be empty'
                    },
                }
            },
            phoneNumber: {
                validators: {
                    notEmpty: {
                        message: 'The phone number is required and cannot be empty'
                    },
                    digits: {
                        message: 'The value can contain only digits'
                    }
                }
            },
            city:{
                validators: {
                    notEmpty: {
                        message: 'The city is required and cannot be empty'
                    },
                }
            }
        }
    }).on('status.field.bv', function(e, data) {
        var $form = $(e.target),
            validator = data.bv,
            $collapsePane = data.element.parents('.collapse'),
            colId = $collapsePane.attr('id');

        if (colId) {
            var $anchor = $('a[href="#' + colId + '"][data-toggle="collapse"]');
            var $icon = $anchor.find('i');

            // Add custom class to panel containing the field
            if (data.status == validator.STATUS_INVALID) {
                $anchor.addClass('bv-col-error');
                $icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
            } else if (data.status == validator.STATUS_VALID) {
                var isValidCol = validator.isValidContainer($collapsePane);
                if (isValidCol) {
                    $anchor.removeClass('bv-col-error');
                }else{
                    $anchor.addClass('bv-col-error');
                }
                $icon.removeClass(faIcon.valid + " " + faIcon.invalid).addClass(isValidCol ? faIcon.valid : faIcon.invalid);
            }
        }
    });

    // FORM VALIDATION CUSTOM ERROR CONTAINER
    // =================================================================
    $('#demo-bv-errorcnt').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
        feedbackIcons: faIcon,
        fields: {
            name: {
                container: 'tooltip',
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[A-Z\s]+$/i,
                        message: 'The first name can only consist of alphabetical characters and spaces'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[A-Z\s]+$/i,
                        message: 'The last name can only consist of alphabetical characters and spaces'
                    }
                }
            },
            email: {
                container: 'tooltip',
                validators: {
                    notEmpty: {
                        message: 'The email address is required and can\'t be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            username: {
                container: 'popover',
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    },
                    different: {
                        field: 'password',
                        message: 'The username and password cannot be the same as each other'
                    }
                }
            },
            password: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username'
                    }
                }
            },
            phoneNumber: {
                container: '#demo-error-container',
                validators: {
                    notEmpty: {
                        message: 'The phone number is required and cannot be empty'
                    },
                    digits: {
                        message: 'The value can contain only digits'
                    }
                }
            },
            city:{
                container: '#demo-error-container',
                validators: {
                    notEmpty: {
                        message: 'The city is required and cannot be empty'
                    },
                }
            }
        }
    }).on('status.field.bv', function(e, data) {
        var $form     = $(e.target),
            validator = data.bv,
            $tabPane  = data.element.parents('.tab-pane'),
            tabId     = $tabPane.attr('id');

        if (tabId) {
            var $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i');
            // Add custom class to tab containing the field
            if (data.status == validator.STATUS_INVALID) {
                $icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
            } else if (data.status == validator.STATUS_VALID) {
                var isValidTab = validator.isValidContainer($tabPane);
                $icon.removeClass(faIcon.valid).addClass(isValidTab ? faIcon.valid : faIcon.invalid);
            }
        }
    });

    // FORM VARIOUS VALIDATION
    // =================================================================
    $('#demo-bvd-notempty').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: faIcon,
        fields: {
            username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required.'
                    }
                }
            },
            acceptTerms: {
                validators: {
                    notEmpty: {
                        message: 'You have to accept the terms and policies'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and can\'t be empty'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'The confirm password is required and can\'t be empty'
                    },
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
            member: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            'programs[]': {
                validators: {
                    choice: {
                        min: 2,
                        max: 4,
                        message: 'Please choose 2 - 4 programming languages you are good at'
                    }
                }
            },
            integer: {
                validators: {
                    notEmpty: {
                        message: 'The number is required and can\'t be empty'
                    },
                    integer: {
                        message: 'The value is not a number'
                    }
                }
            },
            numeric: {
                validators: {
                    notEmpty: {
                        message: 'The number is required and can\'t be empty'
                    },
                    numeric: {
                        message: 'The value is not a number'
                    }
                }
            },
            greaterthan: {
                validators: {
                    notEmpty: {
                        message: 'The number is required and can\'t be empty'
                    },
                    greaterThan: {
                        inclusive:false,
                        //If true, the input value must be greater than or equal to the comparison one.
                        //If false, the input value must be greater than the comparison one
                        value: 50,
                        message: 'Please enter a value greater than 50'
                    }
                }
            },
            lessthan: {
                validators: {
                    notEmpty: {
                        message: 'The number is required and can\'t be empty'
                    },
                    lessThan: {
                        inclusive:false,
                        //If true, the input value must be less than or equal to the comparison one.
                        //If false, the input value must be less than the comparison one
                        value: 25,
                        message: 'Please enter a value less than 25'
                    }
                }
            },
            range: {
                validators: {
                    inclusive:true,
                    notEmpty: {
                        message: 'The number is required and can\'t be empty'
                    },
                    between: {
                        min:1,
                        max:100,
                        message: 'Please enter a number between 1 and 100'
                    }
                }
            },
            uppercase:{
                validators: {
                    notEmpty: {
                        message: 'The card holder is required and can\'t be empty'
                    },
                    // Since case is a Javascript keyword,
                    // you should place it between quotes (like 'case' or "case")
                    // to make it work in all browsers
                    stringCase: {
                        message: 'The card holder must be in uppercase',
                        'case': 'upper'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and can\'t be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            website: {
                validators: {
                    notEmpty: {
                        message: 'The website address is required and can\'t be empty'
                    },
                    uri: {
                        allowLocal: false,
                        message: 'The input is not a valid URL'
                    }
                }
            },
            color: {
                validators: {
                    notEmpty: {
                        message: 'The hex color is required and can\'t be empty'
                    },
                    hexColor: {
                        message: 'The input is not a valid hex color'
                    }
                }
            }
        }
    }).on('success.field.bv', function(e, data) {
        // $(e.target)  --> The field element
        // data.bv      --> The BootstrapValidator instance
        // data.field   --> The field name
        // data.element --> The field element

        var $parent = data.element.parents('.form-group');

        // Remove the has-success class
        $parent.removeClass('has-success');
    });

}

export {
    dataTablesOperate, fooTablesOperate, panelOperate, chosenOperate, select2Operate,
    datePickerOperate, timePickerOperate, formWizard, formValidation
}