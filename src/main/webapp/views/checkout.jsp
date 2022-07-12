<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!DOCTYPE html>
  <%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>

    <html lang="en">

    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="format-detection" content="telephone=no">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <link href="apple-touch-icon.png" rel="apple-touch-icon">
      <link href="favicon.png" rel="icon">
      <meta name="author" content="Nghia Minh Luong">
      <meta name="keywords" content="Default Description">
      <meta name="description" content="Default keyword">
      <title>Sky - Checkout</title>
      <!-- Fonts-->
      <link
        href="https://fonts.googleapis.com/css?family=Archivo+Narrow:300,400,700%7CMontserrat:300,400,500,600,700,800,900"
        rel="stylesheet">
      <link rel="stylesheet" href="../plugins/font-awesome/css/font-awesome.min.css">
      <link rel="stylesheet" href="../plugins/ps-icon/style.css">
      <!-- CSS Library-->
      <link rel="stylesheet" href="../plugins/bootstrap/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="../plugins/owl-carousel/assets/owl.carousel.css">
      <link rel="stylesheet" href="../plugins/jquery-bar-rating/dist/themes/fontawesome-stars.css">
      <link rel="stylesheet" href="../plugins/slick/slick/slick.css">
      <link rel="stylesheet" href="../plugins/bootstrap-select/dist/css/bootstrap-select.min.css">
      <link rel="stylesheet" href="../plugins/Magnific-Popup/dist/magnific-popup.css">
      <link rel="stylesheet" href="../plugins/jquery-ui/jquery-ui.min.css">
      <link rel="stylesheet" href="../plugins/revolution/css/settings.css">
      <link rel="stylesheet" href="../plugins/revolution/css/layers.css">
      <link rel="stylesheet" href="../plugins/revolution/css/navigation.css">
      <!-- Custom-->
      <link rel="stylesheet" href="../css/style.css">
      <!--HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries-->
      <!--WARNING: Respond.js doesn't work if you view the page via file://-->
      <!--[if lt IE 9]><script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script><script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script><![endif]-->
    </head>
    <!--[if IE 7]><body class="ie7 lt-ie8 lt-ie9 lt-ie10"><![endif]-->
    <!--[if IE 8]><body class="ie8 lt-ie9 lt-ie10"><![endif]-->
    <!--[if IE 9]><body class="ie9 lt-ie10"><![endif]-->

    <body class="ps-loading">
      <div class="header--sidebar"></div>
      <header class="header">
        <div class="header__top">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
                <p>460 West 34th Street, 15th floor, New York - Hotline: 804-377-3580 - 804-399-3580</p>
              </div>
              <div class="col-lg-6 col-md-4 col-sm-6 col-xs-12 ">
                <div class="header__actions"><a href="#">Login & Regiser</a>
                  <div class="btn-group ps-dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">USD<i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-menu">
                      <li><a href="#"><img src="images/flag/usa.svg" alt=""> USD</a></li>
                      <li><a href="#"><img src="images/flag/singapore.svg" alt=""> SGD</a></li>
                      <li><a href="#"><img src="images/flag/japan.svg" alt=""> JPN</a></li>
                    </ul>
                  </div>
                  <div class="btn-group ps-dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Language<i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-menu">
                      <li><a href="#">English</a></li>
                      <li><a href="#">Japanese</a></li>
                      <li><a href="#">Chinese</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="navigation">
          <div class="container-fluid">
            <div class="navigation__column left">
              <div class="header__logo"><a class="ps-logo" href="index.jsp"><img src="../images/logo.png" alt=""></a>
              </div>
            </div>
            <div class="navigation__column center">
              <ul class="main-menu menu">
                <li class="menu-item menu-item-has-children dropdown"><a href="index.jsp">Home</a>
                  <ul class="sub-menu">
                    <li class="menu-item"><a href="index.jsp">Homepage #1</a></li>
                    <li class="menu-item"><a href="#">Homepage #2</a></li>
                    <li class="menu-item"><a href="#">Homepage #3</a></li>
                  </ul>
                </li>
                <li class="menu-item menu-item-has-children has-mega-menu"><a href="#">Men</a>
                  <div class="mega-menu">
                    <div class="mega-wrap">
                      <div class="mega-column">
                        <ul class="mega-item mega-features">
                          <li><a href="product-listing.jsp">NEW RELEASES</a></li>
                          <li><a href="product-listing.jsp">FEATURES SHOES</a></li>
                          <li><a href="product-listing.jsp">BEST SELLERS</a></li>
                          <li><a href="product-listing.jsp">NOW TRENDING</a></li>
                          <li><a href="product-listing.jsp">SUMMER ESSENTIALS</a></li>
                          <li><a href="product-listing.jsp">MOTHER'S DAY COLLECTION</a></li>
                          <li><a href="product-listing.jsp">FAN GEAR</a></li>
                        </ul>
                      </div>
                      <div class="mega-column">
                        <h4 class="mega-heading">Shoes</h4>
                        <ul class="mega-item">
                          <li><a href="product-listing.jsp">All Shoes</a></li>
                          <li><a href="product-listing.jsp">Running</a></li>
                          <li><a href="product-listing.jsp">Training & Gym</a></li>
                          <li><a href="product-listing.jsp">Basketball</a></li>
                          <li><a href="product-listing.jsp">Football</a></li>
                          <li><a href="product-listing.jsp">Soccer</a></li>
                          <li><a href="product-listing.jsp">Baseball</a></li>
                        </ul>
                      </div>
                      <div class="mega-column">
                        <h4 class="mega-heading">CLOTHING</h4>
                        <ul class="mega-item">
                          <li><a href="product-listing.jsp">Compression & Nike Pro</a></li>
                          <li><a href="product-listing.jsp">Tops & T-Shirts</a></li>
                          <li><a href="product-listing.jsp">Polos</a></li>
                          <li><a href="product-listing.jsp">Hoodies & Sweatshirts</a></li>
                          <li><a href="product-listing.jsp">Jackets & Vests</a></li>
                          <li><a href="product-listing.jsp">Pants & Tights</a></li>
                          <li><a href="product-listing.jsp">Shorts</a></li>
                        </ul>
                      </div>
                      <div class="mega-column">
                        <h4 class="mega-heading">Accessories</h4>
                        <ul class="mega-item">
                          <li><a href="product-listing.jsp">Compression & Nike Pro</a></li>
                          <li><a href="product-listing.jsp">Tops & T-Shirts</a></li>
                          <li><a href="product-listing.jsp">Polos</a></li>
                          <li><a href="product-listing.jsp">Hoodies & Sweatshirts</a></li>
                          <li><a href="product-listing.jsp">Jackets & Vests</a></li>
                          <li><a href="product-listing.jsp">Pants & Tights</a></li>
                          <li><a href="product-listing.jsp">Shorts</a></li>
                        </ul>
                      </div>
                      <div class="mega-column">
                        <h4 class="mega-heading">BRAND</h4>
                        <ul class="mega-item">
                          <li><a href="product-listing.jsp">NIKE</a></li>
                          <li><a href="product-listing.jsp">Adidas</a></li>
                          <li><a href="product-listing.jsp">Dior</a></li>
                          <li><a href="product-listing.jsp">B&G</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="menu-item"><a href="#">Women</a></li>
                <li class="menu-item"><a href="#">Kids</a></li>
                <li class="menu-item menu-item-has-children dropdown"><a href="#">News</a>
                  <ul class="sub-menu">
                    <li class="menu-item menu-item-has-children dropdown"><a href="blog-grid.jsp">Blog-grid</a>
                      <ul class="sub-menu">
                        <li class="menu-item"><a href="blog-grid.jsp">Blog Grid 1</a></li>
                        <li class="menu-item"><a href="blog-grid-2.jsp">Blog Grid 2</a></li>
                      </ul>
                    </li>
                    <li class="menu-item"><a href="blog-list.jsp">Blog List</a></li>
                  </ul>
                </li>
                <li class="menu-item menu-item-has-children dropdown"><a href="#">Contact</a>
                  <ul class="sub-menu">
                    <li class="menu-item"><a href="contact-us.jsp">Contact Us #1</a></li>
                    <li class="menu-item"><a href="contact-us.jsp">Contact Us #2</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="navigation__column right">
              <form class="ps-search--header" action="do_action" method="post">
                <input class="form-control" type="text" placeholder="Search Productâ¦">
                <button><i class="ps-icon-search"></i></button>
              </form>
              <div class="ps-cart"><a class="ps-cart__toggle" href="#"><span><i>20</i></span><i
                    class="ps-icon-shopping-cart"></i></a>
                <div class="ps-cart__listing">
                  <div class="ps-cart__content">
                    <div class="ps-cart-item"><a class="ps-cart-item__close" href="#"></a>
                      <div class="ps-cart-item__thumbnail"><a href="product-detail.jsp"></a><img
                          src="images/cart-preview/1.jpg" alt=""></div>
                      <div class="ps-cart-item__content"><a class="ps-cart-item__title"
                          href="product-detail.jsp">Amazinâ Glazinâ</a>
                        <p><span>Quantity:<i>12</i></span><span>Total:<i>Â£176</i></span></p>
                      </div>
                    </div>
                    <div class="ps-cart-item"><a class="ps-cart-item__close" href="#"></a>
                      <div class="ps-cart-item__thumbnail"><a href="product-detail.jsp"></a><img
                          src="images/cart-preview/2.jpg" alt=""></div>
                      <div class="ps-cart-item__content"><a class="ps-cart-item__title" href="product-detail.jsp">The
                          Crusty Croissant</a>
                        <p><span>Quantity:<i>12</i></span><span>Total:<i>Â£176</i></span></p>
                      </div>
                    </div>
                    <div class="ps-cart-item"><a class="ps-cart-item__close" href="#"></a>
                      <div class="ps-cart-item__thumbnail"><a href="product-detail.jsp"></a><img
                          src="images/cart-preview/3.jpg" alt=""></div>
                      <div class="ps-cart-item__content"><a class="ps-cart-item__title" href="product-detail.jsp">The
                          Rolling Pin</a>
                        <p><span>Quantity:<i>12</i></span><span>Total:<i>Â£176</i></span></p>
                      </div>
                    </div>
                  </div>
                  <div class="ps-cart__total">
                    <p>Number of items:<span>36</span></p>
                    <p>Item Total:<span>Â£528.00</span></p>
                  </div>
                  <div class="ps-cart__footer"><a class="ps-btn" href="cart.jsp">Check out<i
                        class="ps-icon-arrow-left"></i></a></div>
                </div>
              </div>
              <div class="menu-toggle"><span></span></div>
            </div>
          </div>
        </nav>
      </header>
      <div class="header-services">
        <div class="ps-services owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="7000"
          data-owl-gap="0" data-owl-nav="true" data-owl-dots="false" data-owl-item="1" data-owl-item-xs="1"
          data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000"
          data-owl-mousedrag="on">
          <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard
            delivery on every order with Sky Store</p>
          <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard
            delivery on every order with Sky Store</p>
          <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard
            delivery on every order with Sky Store</p>
        </div>
      </div>
      <main class="ps-main">
        <div class="ps-checkout pt-80 pb-80">
          <div class="ps-container">
            <form class="ps-checkout__form" action="do_action" method="post">
              <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 ">
                  <div class="ps-checkout__billing">
                    <h3>Billing Detail</h3>
                    <div class="form-group form-group--inline">
                      <label>First Name<span>*</span>
                      </label>
                      <input class="form-control" type="text">
                    </div>
                    <div class="form-group form-group--inline">
                      <label>Last Name<span>*</span>
                      </label>
                      <input class="form-control" type="text">
                    </div>
                    <div class="form-group form-group--inline">
                      <label>Company Name<span>*</span>
                      </label>
                      <input class="form-control" type="text">
                    </div>
                    <div class="form-group form-group--inline">
                      <label>Email Address<span>*</span>
                      </label>
                      <input class="form-control" type="email">
                    </div>
                    <div class="form-group form-group--inline">
                      <label>Company Name<span>*</span>
                      </label>
                      <input class="form-control" type="text">
                    </div>
                    <div class="form-group form-group--inline">
                      <label>Phone<span>*</span>
                      </label>
                      <input class="form-control" type="text">
                    </div>
                    <div class="form-group form-group--inline">
                      <label>Address<span>*</span>
                      </label>
                      <input class="form-control" type="text">
                    </div>
                    <div class="form-group">
                      <div class="ps-checkbox">
                        <input class="form-control" type="checkbox" id="cb01">
                        <label for="cb01">Create an account?</label>
                      </div>
                    </div>
                    <h3 class="mt-40"> Addition information</h3>
                    <div class="form-group form-group--inline textarea">
                      <label>Order Notes</label>
                      <textarea class="form-control" rows="5"
                        placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <div class="ps-checkout__order">
                    <header>
                      <h3>Your Order</h3>
                    </header>
                    <div class="content">
                      <table class="table ps-checkout__products">
                        <thead>
                          <tr>
                            <th class="text-uppercase">Product</th>
                            <th class="text-uppercase">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>HABITANT x1</td>
                            <td>$300.00</td>
                          </tr>
                          <tr>
                            <td>Card Subtitle</td>
                            <td>$300.00</td>
                          </tr>
                          <tr>
                            <td>Order Total</td>
                            <td>$300.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <footer>
                      <h3>Payment Method</h3>
                      <div class="form-group cheque">
                        <div class="ps-radio">
                          <input class="form-control" type="radio" id="rdo01" name="payment" checked>
                          <label for="rdo01">Cheque Payment</label>
                          <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County,
                            Store Postcode.</p>
                        </div>
                      </div>
                      <div class="form-group paypal">
                        <div class="ps-radio ps-radio--inline">
                          <input class="form-control" type="radio" name="payment" id="rdo02">
                          <label for="rdo02">Paypal</label>
                        </div>
                        <ul class="ps-payment-method">
                          <li><a href="#"><img src="images/payment/1.png" alt=""></a></li>
                          <li><a href="#"><img src="images/payment/2.png" alt=""></a></li>
                          <li><a href="#"><img src="images/payment/3.png" alt=""></a></li>
                        </ul>
                        <button class="ps-btn ps-btn--fullwidth">Place Order<i class="ps-icon-next"></i></button>
                      </div>
                    </footer>
                  </div>
                  <div class="ps-shipping">
                    <h3>FREE SHIPPING</h3>
                    <p>YOUR ORDER QUALIFIES FOR FREE SHIPPING.<br> <a href="#"> Singup </a> for free shipping on every
                      order, every time.</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="ps-subscribe">
          <div class="ps-container">
            <div class="row">
              <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 ">
                <h3><i class="fa fa-envelope"></i>Sign up to Newsletter</h3>
              </div>
              <div class="col-lg-5 col-md-7 col-sm-12 col-xs-12 ">
                <form class="ps-subscribe__form" action="do_action" method="post">
                  <input class="form-control" type="text" placeholder="">
                  <button>Sign up now</button>
                </form>
              </div>
              <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12 ">
                <p>...and receive <span>$20</span> coupon for first shopping.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="ps-footer bg--cover" data-background="images/background/parallax.jpg">
          <div class="ps-footer__content">
            <div class="ps-container">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--info">
                    <header><a class="ps-logo" href="index.jsp"><img src="images/logo-white.png" alt=""></a>
                      <h3 class="ps-widget__title">Address Office 1</h3>
                    </header>
                    <footer>
                      <p><strong>460 West 34th Street, 15th floor, New York</strong></p>
                      <p>Email: <a href='mailto:support@store.com'>support@store.com</a></p>
                      <p>Phone: +323 32434 5334</p>
                      <p>Fax: ++323 32434 5333</p>
                    </footer>
                  </aside>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--info second">
                    <header>
                      <h3 class="ps-widget__title">Address Office 2</h3>
                    </header>
                    <footer>
                      <p><strong>PO Box 16122 Collins Victoria 3000 Australia</strong></p>
                      <p>Email: <a href='mailto:support@store.com'>support@store.com</a></p>
                      <p>Phone: +323 32434 5334</p>
                      <p>Fax: ++323 32434 5333</p>
                    </footer>
                  </aside>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 class="ps-widget__title">Find Our store</h3>
                    </header>
                    <footer>
                      <ul class="ps-list--link">
                        <li><a href="#">Coupon Code</a></li>
                        <li><a href="#">SignUp For Email</a></li>
                        <li><a href="#">Site Feedback</a></li>
                        <li><a href="#">Careers</a></li>
                      </ul>
                    </footer>
                  </aside>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 class="ps-widget__title">Get Help</h3>
                    </header>
                    <footer>
                      <ul class="ps-list--line">
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Shipping and Delivery</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Payment Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                      </ul>
                    </footer>
                  </aside>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 class="ps-widget__title">Products</h3>
                    </header>
                    <footer>
                      <ul class="ps-list--line">
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Accessries</a></li>
                        <li><a href="#">Football Boots</a></li>
                      </ul>
                    </footer>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div class="ps-footer__copyright">
            <div class="ps-container">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                  <p>&copy; <a href="#">SKYTHEMES</a>, Inc. All rights Resevered. Design by <a href="#"> Alena
                      Studio</a></p>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                  <ul class="ps-social">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <!-- JS Library-->
      <script type="text/javascript" src="../plugins/jquery/dist/jquery.min.js"></script>
      <script type="text/javascript" src="../plugins/bootstrap/dist/js/bootstrap.min.js"></script>
      <script type="text/javascript" src="../plugins/jquery-bar-rating/dist/jquery.barrating.min.js"></script>
      <script type="text/javascript" src="../plugins/owl-carousel/owl.carousel.min.js"></script>
      <script type="text/javascript" src="../plugins/gmap3.min.js"></script>
      <script type="text/javascript" src="../plugins/imagesloaded.pkgd.js"></script>
      <script type="text/javascript" src="../plugins/isotope.pkgd.min.js"></script>
      <script type="text/javascript" src="../plugins/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
      <script type="text/javascript" src="../plugins/jquery.matchHeight-min.js"></script>
      <script type="text/javascript" src="../plugins/slick/slick/slick.min.js"></script>
      <script type="text/javascript" src="../plugins/elevatezoom/jquery.elevatezoom.js"></script>
      <script type="text/javascript" src="../plugins/Magnific-Popup/dist/jquery.magnific-popup.min.js"></script>
      <script type="text/javascript" src="../plugins/jquery-ui/jquery-ui.min.js"></script>
      <script type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAx39JFH5nhxze1ZydH-Kl8xXM3OK4fvcg&amp;region=GB"></script>
      <script type="text/javascript" src="../plugins/revolution/js/jquery.themepunch.tools.min.js"></script>
      <script type="text/javascript" src="../plugins/revolution/js/jquery.themepunch.revolution.min.js"></script>
      <script type="text/javascript"
        src="../plugins/revolution/js/extensions/revolution.extension.video.min.js"></script>
      <script type="text/javascript"
        src="../plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
      <script type="text/javascript"
        src="../plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
      <script type="text/javascript"
        src="../plugins/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
      <script type="text/javascript"
        src="../plugins/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
      <script type="text/javascript"
        src="../plugins/revolution/js/extensions/revolution.extension.actions.min.js"></script>
      <!-- Custom scripts-->
      <script type="text/javascript" src="../js/main.js"></script>
    </body>

    </html>