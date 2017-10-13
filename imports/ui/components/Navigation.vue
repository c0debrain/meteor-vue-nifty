<template>
    <nav id="mainnav-container">
        <div id="mainnav">
            <!--Menu-->
            <div id="mainnav-menu-wrap">
                <div class="nano">
                    <div class="nano-content">

                        <!--Profile Widget-->
                        <div id="mainnav-profile" class="mainnav-profile">
                            <div class="profile-wrap">
                                <div class="pad-btm">
                                    <span class="label label-success pull-right">New</span>
                                    <img class="img-circle img-sm img-border" src="/img/man.png" alt="Profile Picture">
                                </div>
                                <a href="#profile-nav" class="box-block" data-toggle="collapse" aria-expanded="false">
                  <span class="pull-right dropdown-toggle">
                      <i class="dropdown-caret"></i>
                  </span>
                                    <p class="mnp-name">Aaron Chavez</p>
                                    <span class="mnp-desc">aaron.cha@themeon.net</span>
                                </a>
                            </div>
                            <div id="profile-nav" class="collapse list-group bg-trans">
                                <a href="#" class="list-group-item">
                                    <i class="demo-pli-male icon-lg icon-fw"></i> View Profile
                                </a>
                                <a href="#" class="list-group-item">
                                    <i class="demo-pli-gear icon-lg icon-fw"></i> Settings
                                </a>
                                <a href="#" class="list-group-item">
                                    <i class="demo-pli-information icon-lg icon-fw"></i> Help
                                </a>
                                <a href="#" class="list-group-item">
                                    <i class="demo-pli-unlock icon-lg icon-fw"></i> Logout
                                </a>
                            </div>
                        </div>

                        <!--Shortcut buttons-->
                        <div id="mainnav-shortcut">
                            <ul class="list-unstyled">
                                <li class="col-xs-3" data-content="My Profile">
                                    <a class="shortcut-grid" href="#">
                                        <i class="demo-psi-male"></i>
                                    </a>
                                </li>
                                <li class="col-xs-3" data-content="Messages">
                                    <a class="shortcut-grid" href="#">
                                        <i class="demo-psi-speech-bubble-3"></i>
                                    </a>
                                </li>
                                <li class="col-xs-3" data-content="Activity">
                                    <a class="shortcut-grid" href="#">
                                        <i class="demo-psi-thunder"></i>
                                    </a>
                                </li>
                                <li class="col-xs-3" data-content="Lock Screen">
                                    <a class="shortcut-grid" href="#">
                                        <i class="demo-psi-lock-2"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--End shortcut buttons-->

                        <ul id="mainnav-menu" class="list-group">
                            <!--Category name-->
                            <li class="list-header">Navigation</li>

                            <!--Menu list item-->
                            <li>
                                <a href="#">
                                    <i class="demo-psi-home"></i>
                                    <span class="menu-title">
                    <strong>Dashboard</strong>
                    <span class="label label-danger pull-right">TOP</span>
                  </span>
                                </a>
                            </li>
                            <!--Menu list item-->
                            <li>
                                <a href="#">
                                    <i class="demo-psi-split-vertical-2"></i>
                                    <span class="menu-title">
                      <strong>Layouts</strong>
                    </span>
                                    <i class="arrow"></i>
                                </a>
                                <!--Submenu-->
                                <ul class="collapse">
                                    <li><a href="#">Navigation-todo</a></li>
                                    <li><a href="#">Navigation-todo</a></li>
                                    <li class="list-divider"></li>
                                    <li><a href="#">Navigation-todo<span class="label label-info pull-right">New</span></a></li>
                                    <!--<li><router-link to="/fixed-footer">Fixed Footer</router-link></li>-->
                                </ul>
                            </li>
                            <!--Menu list item-->
                            <li>
                                <a href="#">
                                    <i class="demo-psi-gear-2"></i>
                                    <span class="menu-title">
                    <strong>Widgets</strong>
                    <span class="pull-right badge badge-warning">24</span>
                  </span>
                                </a>
                            </li>

                            <li class="list-divider"></li>

                            <!--Category name-->
                            <li class="list-header">Components</li>
                            <!--Menu list item-->
                            <li>
                                <a href="#">
                                    <i class="demo-psi-boot-2"></i>
                                    <span class="menu-title">UI Elements</span>
                                    <i class="arrow"></i>
                                </a>
                                <!--Submenu-->
                                <ul class="collapse">
                                    <li><router-link to="/button">Buttons</router-link></li>
                                    <li><router-link to="/panels">Panels</router-link></li>
                                    <li><router-link to="/modals">Modals</router-link></li>
                                    <li><router-link to="/tabsAccordions">Tabs &amp; Accordions</router-link></li>
                                    <li><router-link to="/alertsTooltips">Alerts &amp; Tooltips</router-link></li>
                                </ul>
                            </li>
                            <!--Menu list item-->
                            <li>
                                <a href="#">
                                    <i class="demo-psi-receipt-4"></i>
                                    <span class="menu-title">Tables</span>
                                    <i class="arrow"></i>
                                </a>
                                <!--Submenu-->
                                <ul class="collapse">
                                    <li><router-link to="/dataTables">Data Tables</router-link></li>
                                    <li><router-link to="/fooTables">Foo Tables</router-link></li>
                                </ul>
                            </li>
                            <!--Menu list item-->
                            <li>
                                <a href="#">
                                    <i class="demo-psi-pen-5"></i>
                                    <span class="menu-title">Forms</span>
                                    <i class="arrow"></i>
                                </a>
                                <!--Submenu-->
                                <ul class="collapse">
                                    <li><router-link to="/generalForm">General</router-link></li>
                                    <li><router-link to="/advancedForms">Advanced Components</router-link></li>
                                    <li><router-link to="/validationForm">Validation</router-link></li>
                                    <li><router-link to="/wizardForm">Wizard</router-link></li>
                                </ul>
                            </li>
                            <!--Menu list item-->
                            <li class="list-divider"></li>
                        </ul>

                        <!--Widget-->
                        <div class="mainnav-widget">
                            <!-- Show the button on collapsed navigation -->
                            <div class="show-small">
                                <a href="#" data-toggle="menu-widget" data-target="#demo-wg-server">
                                    <i class="demo-pli-monitor-2"></i>
                                </a>
                            </div>
                            <!-- Hide the content on collapsed navigation -->
                            <div id="demo-wg-server" class="hide-small mainnav-widget-content">
                                <ul class="list-group">
                                    <li class="list-header pad-no pad-ver">Server Status</li>
                                    <li class="mar-btm">
                                        <span class="label label-primary pull-right">15%</span>
                                        <p>CPU Usage</p>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar progress-bar-primary" style="width: 15%;">
                                                <span class="sr-only">15%</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mar-btm">
                                        <span class="label label-purple pull-right">75%</span>
                                        <p>Bandwidth</p>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar progress-bar-purple" style="width: 75%;">
                                                <span class="sr-only">75%</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="pad-ver"><a href="#" class="btn btn-success btn-bock">View Details</a></li>
                                </ul>
                            </div>
                        </div>
                        <!--End widget-->
                    </div>
                </div>
            </div>
            <!--End menu-->
        </div>
    </nav>
</template>

<style>
</style>

<script>
</script>