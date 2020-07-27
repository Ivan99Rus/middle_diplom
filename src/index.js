import toTop from './modules/toTop';
import dropdownMenu from './modules/dropdownMenu';
import signUpFreeSession from './modules/signUpFreeSession';
import callbackForm from './modules/callbackForm';
import gift from './modules/gift';
import mainSlider from './modules/mainSlider';
import sendForm from './modules/sendForm';
import validForm from './modules/validForm';
import fixedMenu from './modules/fixedMenu';
import toggleMenu from './modules/toggleMenu';
import calc from './modules/calc';
import gallerySlider from './modules/gallerySlider';
import servicesSlider from './modules/servicesSlider';

const locationName = location.pathname;

toTop();
dropdownMenu();
signUpFreeSession();
callbackForm();
if (locationName === '/index.html' || locationName === '/') {
  gift();
}
mainSlider();
sendForm(document.getElementById('form1'));
sendForm(document.getElementById('form2'));
sendForm(document.getElementById('banner-form'));
sendForm(document.getElementById('footer_form'));
validForm('#form1', '#callback_form1-phone');
validForm('#form2', '#callback_form2-phone');
validForm('#banner-form', '#phone');
validForm('#footer_form', '#callback_footer_form-phone');
fixedMenu();
toggleMenu();
calc();
gallerySlider();
servicesSlider();