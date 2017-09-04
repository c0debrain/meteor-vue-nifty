<template>
    <div id="content-container">
        <!--Page Title-->
        <div id="page-title">
            <h1 class="page-header text-overflow">Form Validation</h1>
            <!--Searchbox-->
            <div class="searchbox">
                <div class="input-group custom-search-form">
                    <input type="text" class="form-control" placeholder="Search..">
                    <span class="input-group-btn">
                        <button class="text-muted" type="button"><i class="demo-pli-magnifi-glass"></i></button>
                    </span>
                </div>
            </div>
        </div>
        <!--End page title-->

        <!--Breadcrumb-->
        <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Forms</a></li>
            <li class="active">Form Validation</li>
        </ol>
        <!--End breadcrumb-->

        <!--Page content-->
        <!--===================================================-->
        <div id="page-content">

            <div class="row">
                <div class="col-lg-6">

                    <!-- FORM VALIDATION ON TABS -->
                    <!--===================================================-->
                    <div class="tab-base">

                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs">
                            <li class="active"><a href="#demo-bsc-tab-1" data-toggle="tab">Information</a></li>
                            <li><a href="#demo-bsc-tab-2" data-toggle="tab">Address</a></li>
                        </ul>

                        <!-- Tabs Content -->
                        <form id="demo-bv-bsc-tabs" class="form-horizontal" action="#" method="post">
                            <div class="tab-content">
                                <div class="tab-pane pad-btm fade in active" id="demo-bsc-tab-1">
                                    <p class="text-main text-bold">First Tab</p>
                                    <hr>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Full name</label>
                                        <div class="col-lg-7">
                                            <input type="text" class="form-control" name="fullName" placeholder="Full name">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Company</label>
                                        <div class="col-lg-7">
                                            <input type="text" class="form-control" name="company" placeholder="Company">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Member Type</label>
                                        <div class="col-lg-7">
                                            <div class="radio">
                                                <input id="demo-radio-1" class="magic-radio" type="radio" name="memberType" value="free">
                                                <label for="demo-radio-1">Free</label>

                                                <input id="demo-radio-2" class="magic-radio" type="radio" name="memberType" value="personal">
                                                <label for="demo-radio-2">Personal</label>

                                                <input id="demo-radio-3" class="magic-radio" type="radio" name="memberType" value="bussines">
                                                <label for="demo-radio-3">Bussiness</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="demo-bsc-tab-2">
                                    <p class="text-main text-bold">Second Tab</p>
                                    <hr>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Address</label>
                                        <div class="col-lg-7">
                                            <input type="text" class="form-control" name="address" placeholder="Address">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">City</label>
                                        <div class="col-lg-7">
                                            <input type="text" class="form-control" name="city" placeholder="City">
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-footer clearfix">
                                    <div class="col-lg-7 col-lg-offset-3">
                                        <button type="submit" class="btn btn-primary">Validate</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!--===================================================-->
                    <!-- END FORM VALIDATION ON TABS -->

                    <!-- FORM VALIDATION ON ACCORDION -->
                    <!--===================================================-->
                    <form id="demo-bv-accordion" class="form-horizontal" action="#" method="post">
                        <div id="demo-accordion" class="panel-group accordion">
                            <div class="panel">

                                <!-- Accordion title -->
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a data-parent="#demo-accordion" data-toggle="collapse" href="#demo-acc-panel-1">Account</a>
                                    </h4>
                                </div>

                                <!-- Accordion content -->
                                <div id="demo-acc-panel-1" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label class="col-lg-3 control-label">Username</label>
                                            <div class="col-lg-7">
                                                <input type="text" class="form-control" name="username" placeholder="Username">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-lg-3 control-label">Email address</label>
                                            <div class="col-lg-7">
                                                <input type="email" class="form-control" name="email" placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-lg-3 control-label">Password</label>
                                            <div class="col-lg-7">
                                                <input type="password" class="form-control" name="password" placeholder="Password">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel">

                                <!-- Accordion title -->
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a data-parent="#demo-accordion" data-toggle="collapse" href="#demo-acc-panel-2">Information</a>
                                    </h4>
                                </div>

                                <!-- Accordion content -->
                                <div id="demo-acc-panel-2" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label class="col-lg-3 control-label">Full name</label>
                                            <div class="col-lg-4">
                                                <input type="text" class="form-control" name="firstName" placeholder="First name">
                                            </div>
                                            <div class="col-lg-4">
                                                <input type="text" class="form-control" name="lastName" placeholder="Last name">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-lg-3 control-label">Member type</label>
                                            <div class="col-lg-7">
                                                <div class="radio">
                                                    <input id="demo-radio-4" class="magic-radio" type="radio" name="memberType" value="free">
                                                    <label for="demo-radio-4">Free</label>

                                                    <input id="demo-radio-5" class="magic-radio" type="radio" name="memberType" value="personal">
                                                    <label for="demo-radio-5">Personal</label>

                                                    <input id="demo-radio-6" class="magic-radio" type="radio" name="memberType" value="bussines">
                                                    <label for="demo-radio-6">Bussiness</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-lg-3 control-label">Bio</label>
                                            <div class="col-lg-7">
                                                <textarea class="form-control" name="bio" rows="7" placeholder="Tell us your story..."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel">

                                <!-- Accordion title -->
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a data-parent="#demo-accordion" data-toggle="collapse" href="#demo-acc-panel-3">Profile</a>
                                    </h4>
                                </div>

                                <!-- Accordion content -->
                                <div id="demo-acc-panel-3" class="panel-collapse collapse in">
                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label class="col-lg-3 control-label">Phone number</label>
                                            <div class="col-lg-7">
                                                <input type="text" class="form-control" name="phoneNumber" placeholder="Phone number">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-lg-3 control-label">City</label>
                                            <div class="col-lg-7">
                                                <input type="text" class="form-control" name="city" placeholder="City">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-lg-7 col-lg-offset-3">
                                                <button type="submit" class="btn btn-primary" name="signup" value="Sign up">Sign up</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <!--===================================================-->
                    <!-- END FORM VALIDATION ON ACCORDION -->

                    <div class="panel">

                        <!-- Panel heading -->
                        <div class="panel-heading">
                            <div class="panel-control">
                                <ul class="nav nav-tabs">
                                    <li class="active"><a data-toggle="tab" href="#demo-tabs-box-1">Tooltip</a></li>
                                    <li><a data-toggle="tab" href="#demo-tabs-box-2">Popover</a></li>
                                    <li><a data-toggle="tab" href="#demo-tabs-box-3">Custom container</a></li>
                                </ul>
                            </div>
                            <h3 class="panel-title">Showing errors in...</h3>
                        </div>

                        <!-- Panel body -->
                        <form id="demo-bv-errorcnt" class="form-horizontal" action="#" method="post">
                            <div class="panel-body">
                                <div class="tab-content">

                                    <!--SHOWING ERRORS IN TOOLTIP-->
                                    <!--===================================================-->
                                    <div id="demo-tabs-box-1" class="tab-pane fade in active">
                                        <p class="text-main text-bold">Tooltip</p>
                                        <hr>
                                        <div class="form-group">
                                            <label class="col-lg-3 control-label">Name</label>
                                            <div class="col-lg-7">
                                                <input type="text" class="form-control" name="name" placeholder="Name">
                                            </div>
                                        </div>
                                        <div class="form-group pad-btm">
                                            <label class="col-lg-3 control-label">Email address</label>
                                            <div class="col-lg-7">
                                                <input type="email" class="form-control" name="email" placeholder="Email">
                                            </div>
                                        </div>
                                    </div>
                                    <!--===================================================-->


                                    <!--SHOWING ERRORS IN POPOVER-->
                                    <!--===================================================-->
                                    <div id="demo-tabs-box-2" class="tab-pane fade">
                                        <p class="text-main text-bold">Popover</p>
                                        <hr>
                                        <div class="form-group">
                                            <label class="col-lg-3 control-label">Username</label>
                                            <div class="col-lg-7">
                                                <input type="text" class="form-control" name="username" placeholder="Username">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-lg-3 control-label">Password</label>
                                            <div class="col-lg-7">
                                                <input type="password" class="form-control" name="password" placeholder="Password">
                                            </div>
                                        </div>
                                    </div>
                                    <!--===================================================-->


                                    <!--SHOWING ERRORS IN CUSTOM CONTAINER-->
                                    <!--===================================================-->
                                    <div id="demo-tabs-box-3" class="tab-pane fade">
                                        <p class="text-main text-bold">Custom container</p>
                                        <hr>
                                        <div class="form-group">
                                            <label class="col-lg-3 control-label">Phone Number</label>
                                            <div class="col-lg-7">
                                                <input type="text" class="form-control" name="phoneNumber" placeholder="Phone number">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-lg-3 control-label">City</label>
                                            <div class="col-lg-7">
                                                <input type="text" class="form-control" name="city" placeholder="City">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-lg-7 col-lg-offset-3">
                                                <div id="demo-error-container" class="bg-gray-light"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--===================================================-->

                                </div>
                            </div>
                            <div class="panel-footer clearfix">
                                <div class="col-lg-7 col-lg-offset-3">
                                    <button type="submit" class="btn btn-mint" name="signup" value="Sign up">Sign up</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div class="col-lg-6">
                    <div class="panel">
                        <div class="panel-heading">
                            <h3 class="panel-title">Form Validation</h3>
                        </div>

                        <form id="demo-bvd-notempty" action="forms-validation.html" class="form-horizontal">
                            <div class="panel-body">
                                <p class="bord-btm pad-ver text-main text-bold">Not Empty validator</p>

                                <!--NOT EMPTY VALIDATOR-->
                                <!--===================================================-->
                                <fieldset>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Username</label>
                                        <div class="col-lg-7">
                                            <input type="text" class="form-control" name="username" placeholder="Username">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-lg-7 col-lg-offset-3">
                                            <div class="checkbox">
                                                <input id="demo-checkbox-1" class="magic-checkbox" type="checkbox" name="acceptTerms">
                                                <label for="demo-checkbox-1"> Accept the terms and policies</label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <!--===================================================-->

                                <br>
                                <p class="bord-btm pad-ver text-main text-bold">Identical validator</p>

                                <!--IDENTICAL VALIDATOR-->
                                <!--===================================================-->
                                <fieldset>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Password</label>
                                        <div class="col-lg-7">
                                            <input type="password" class="form-control" name="password" placeholder="Password">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Retype password</label>
                                        <div class="col-lg-7">
                                            <input type="password" class="form-control" name="confirmPassword" placeholder="Retype password">
                                        </div>
                                    </div>
                                </fieldset>
                                <!--===================================================-->

                                <br>
                                <p class="bord-btm pad-ver text-main text-bold">Other validators</p>

                                <!--OTHER VALIDATOR-->
                                <!--===================================================-->
                                <fieldset>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Member Type</label>
                                        <div class="col-lg-7">
                                            <div class="radio">
                                                <input id="demo-radio-7" class="magic-radio" type="radio" name="member" value="free">
                                                <label for="demo-radio-7">Free</label>

                                                <input id="demo-radio-8" class="magic-radio" type="radio" name="member" value="personal">
                                                <label for="demo-radio-8">Personal</label>

                                                <input id="demo-radio-9" class="magic-radio" type="radio" name="member" value="bussines">
                                                <label for="demo-radio-9">Bussiness</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Skill</label>
                                        <div class="col-lg-7">

                                            <div class="checkbox">
                                                <input id="demo-checkbox-2" class="magic-checkbox" type="checkbox" name="programs[]" value="net">
                                                <label for="demo-checkbox-2">.Net</label>
                                            </div>

                                            <div class="checkbox">
                                                <input id="demo-checkbox-3" class="magic-checkbox" type="checkbox" name="programs[]" value="java">
                                                <label for="demo-checkbox-3">Java</label>
                                            </div>

                                            <div class="checkbox">
                                                <input id="demo-checkbox-4" class="magic-checkbox" type="checkbox" name="programs[]" value="c">
                                                <label for="demo-checkbox-4">C/C++</label>
                                            </div>

                                            <div class="checkbox">
                                                <input id="demo-checkbox-5" class="magic-checkbox" type="checkbox" name="programs[]" value="php">
                                                <label for="demo-checkbox-5">PHP</label>
                                            </div>

                                            <div class="checkbox">
                                                <input id="demo-checkbox-6" class="magic-checkbox" type="checkbox" name="programs[]" value="perl">
                                                <label for="demo-checkbox-6">Perl</label>
                                            </div>

                                            <div class="checkbox">
                                                <input id="demo-checkbox-7" class="magic-checkbox" type="checkbox" name="programs[]" value="Ruby">
                                                <label for="demo-checkbox-7">Ruby</label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Integer</label>
                                        <div class="col-lg-7">
                                            <input type="number" class="form-control" name="integer" placeholder="Integer">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Numeric</label>
                                        <div class="col-lg-7">
                                            <input type="text" class="form-control" name="numeric" placeholder="Decimal is allowed">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Greater than</label>
                                        <div class="col-lg-7">
                                            <input type="number" class="form-control" name="greaterthan" placeholder="Numbers greater than 50">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Less than 25</label>
                                        <div class="col-lg-7">
                                            <input type="number" class="form-control" name="lessthan" placeholder="Numbers less than 50">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Range [1 - 100]</label>
                                        <div class="col-lg-7">
                                            <input type="number" class="form-control" name="range" placeholder="Numbers 1-100">
                                        </div>
                                    </div>
                                </fieldset>
                                <!--===================================================-->

                                <br>
                                <p class="bord-btm pad-ver text-main text-bold">Regular expression based validators</p>

                                <!--REGULAR EXPRESSION BASED VALIDATORS-->
                                <!--===================================================-->
                                <fieldset>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Email address</label>
                                        <div class="col-lg-7">
                                            <input type="email" class="form-control" name="email" placeholder="email">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Website</label>
                                        <div class="col-lg-7">
                                            <input type="text" class="form-control" name="website" placeholder="http://" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-lg-3 control-label">Hex color</label>
                                        <div class="col-lg-5">
                                            <input type="text" class="form-control" name="color" placeholder="#fff">
                                        </div>
                                    </div>
                                </fieldset>
                                <!--===================================================-->

                            </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-sm-7 col-sm-offset-3">
                                        <button class="btn btn-mint" type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        <!--===================================================-->
        <!--End page content-->


    </div>
</template>

<script>
    import { formValidation } from '/imports/client/operateDOM.js'
    export default {
        mounted () {
            formValidation()
        }
    }
</script>