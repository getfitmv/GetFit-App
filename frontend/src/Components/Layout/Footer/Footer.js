import React from "react";

export default function Footer() {
  return (
    <div className="footer-parent">
      <footer className="flex-rw">
        <ul className="footer-list-top">
          <li>
            <h4 className="footer-list-header">About Get Fit</h4>
          </li>
          <li>
            <a
              href="/shop/about-mission"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              GET TO KNOW US
            </a>
          </li>
          <li>
            <a
              href="/promos.html"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              PROMOS
            </a>
          </li>
          <li>
            <a
              href="/retailers/new-retailers.html"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              Become A Personal Trainer
            </a>
          </li>

          <li>
            <a
              href="/job-openings.html"
              itemprop="significantLink"
              className="generic-anchor footer-list-anchor"
            >
              JOB OPENINGS
            </a>
          </li>

          <li>
            <a
              href="/shop/about-show-schedule"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              EVENTS
            </a>
          </li>
        </ul>
        <ul className="footer-list-top">
          <li id="help">
            <h4 className="footer-list-header">Please Help Me</h4>
          </li>
          <li>
            <a
              href="/shop/about-contact"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              href="/faq.html"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              FAQ
            </a>
          </li>
          <li id="find-a-store">
            <a
              href="/shop/store-locator"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              STORE LOCATOR
            </a>
          </li>
          <li id="user-registration">
            <a
              href="/shop/user-registration?URL="
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              NEW USERS
            </a>
          </li>
          <li id="order-tracking">
            <a
              href="/shop/order-status"
              itemprop="significantLink"
              className="generic-anchor footer-list-anchor"
            >
              ORDER STATUS
            </a>
          </li>
        </ul>
        <section className="footer-social-section flex-rw">
          <span className="footer-social-overlap footer-social-connect">
            <span className="footer-social-small">Follow</span> US
          </span>
          <span className="footer-social-overlap footer-social-icons-wrapper">
            <a
              href="https://www.pinterest.com/paviliongift/"
              className="generic-anchor"
              target="_blank"
              title="Pinterest"
              itemprop="significantLink"
            >
              <i className="fa fa-pinterest" />
            </a>
            <a
              href="https://www.facebook.com/paviliongift"
              className="generic-anchor"
              target="_blank"
              title="Facebook"
              itemprop="significantLink"
            >
              <i className="fa fa-facebook" />
            </a>
            <a
              href="https://twitter.com/PavilionGiftCo"
              className="generic-anchor"
              target="_blank"
              title="Twitter"
              itemprop="significantLink"
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              href="http://instagram.com/paviliongiftcompany"
              className="generic-anchor"
              target="_blank"
              title="Instagram"
              itemprop="significantLink"
            >
              <i className="fa fa-instagram" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg"
              className="generic-anchor"
              target="_blank"
              title="Youtube"
              itemprop="significantLink"
            >
              <i className="fa fa-youtube" />
            </a>
            <a
              href="https://plus.google.com/+Paviliongift/posts"
              className="generic-anchor"
              target="_blank"
              title="Google Plus"
              itemprop="significantLink"
            >
              <i className="fa fa-google-plus" />
            </a>
          </span>
        </section>
        <section className="footer-bottom-section flex-rw">
          <div className="footer-bottom-wrapper">
            <i className="fa fa-copyright" role="copyright" /> 2015 Pavilion in{" "}
            <address className="footer-address" role="company address">
              Bergen, NY
            </address>
            <span class="footer-bottom-rights"> - All Rights Reserved - </span>
          </div>
        </section>
      </footer>
    </div>
  );
}
