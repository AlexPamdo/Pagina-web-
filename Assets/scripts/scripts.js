let icon1 = document.getElementById('icon1');
let icon2 = document.getElementById('icon2');
let icon3 = document.getElementById('icon3');
let text = document.getElementById('text');

icon1.addEventListener('mouseover', function() {
    text.textContent = 'Este servicio permite a los clientes expresar sus insatisfacciones o inconformidades con respecto a un producto o servicio. La gestión de reclamos implica la recepción, evaluación y respuesta a las quejas de los clientes. Los reclamos pueden surgir cuando los clientes encuentran una discrepancia entre lo que la marca promete en términos de producto o servicios y lo que realmente obtienen. Este servicio es crucial para mantener una buena relación con el cliente, incluso después de que se haya cometido un error.';
});

icon2.addEventListener('mouseover', function() {
    text.textContent = 'El servicio de auditoría proporciona una perspectiva independiente sobre las prácticas contables y los riesgos comerciales de los clientes, promoviendo la transparencia en la información financiera. Este servicio utiliza las Normas Internacionales de Auditoría como marco de referencia técnico y combina políticas y procedimientos para la auditoría del control interno y de los estados financieros. El objetivo es reforzar la lealtad del cliente y garantizar la calidad.';
});

icon3.addEventListener('mouseover', function() {
    text.textContent = 'El servicio de denuncias permite a los usuarios informar sobre actividades sospechosas o ilegales. Los usuarios pueden presentar una denuncia y luego consultar su estado a través del servicio de seguimiento de denuncias. Este servicio es esencial para mantener la integridad y la seguridad en cualquier organización o comunidad.';
});

const btnAbrirModal = 
document.querySelector("#btn-abrir-modal");
const btnCerrarModal =
document.querySelector("btn-cerrar-modal");
const modal =
document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})