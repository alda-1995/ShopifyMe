import $ from "jquery";
import { validate } from "jquery-validation";

const numberContacto = "522311402377";
const apiWhats = "https://api.whatsapp.com/send?phone=";
const validateContacto = {
    // Specify validation rules
    rules: {
        telefono: {
            required: true,
            minlength: 14,
            maxlength: 14
        },
    },
    messages: {
        telefono: {
            required: "El número de teléfono es requerido",
            minlength: "El número de teléfono es incorrecto",
            maxlength: "El número de teléfono es incorrecto",
        },
    },
    errorPlacement: function (error, element) {
        error.insertAfter(element.parent());
    },
    highlight: function (element) {
        // $(element).parent().addClass('errorInput');
    },
    unhighlight: function (element) {
        // $(element).parent().removeClass('errorInput');
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form, event) {
        event.preventDefault();
        if ($(form).valid())
            enviaMensajeWhatsapp();
    },
};

var inputPhones = document.querySelectorAll('.phoneValidationMark');
if (inputPhones.length > 0) {
    for (let i = 0; i < inputPhones.length; i++) {
        inputPhones[i].addEventListener("input", function (e) {
            var a = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            e.target.value = !a[2] ? a[1] : '(' + a[1] + ') ' + a[2] + (a[3] ? '-' + a[3] : '');
        });
    }
}

$("#formTopContacto").validate(validateContacto);

$("#formBottomContacto").validate(validateContacto);

const enviaMensajeWhatsapp = () => {
    window.open(apiWhats + numberContacto, "_blank");
};
