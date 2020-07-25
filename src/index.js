import toTop from './modules/toTop';
import dropdownMenu from './modules/dropdownMenu';
import signUpFreeSession from './modules/signUpFreeSession';
import callbackForm from './modules/callbackForm';
import gift from './modules/gift';
import mainSlider from './modules/mainSlider';
import sendForm from './modules/sendForm';
import validForm from './modules/validForm';
import fixedMenu from './modules/fixedMenu';

toTop();
dropdownMenu();
signUpFreeSession();
callbackForm();
gift();
mainSlider();
sendForm(document.getElementById('form1'));
sendForm(document.getElementById('form2'));
sendForm(document.getElementById('banner-form'));
validForm('#form1', '#callback_form1-phone');
validForm('#form2', '#callback_form2-phone');
validForm('#banner-form', '#phone');
fixedMenu();