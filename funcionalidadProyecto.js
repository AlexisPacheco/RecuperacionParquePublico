var divObjetivoGeneral = document.getElementById("divObjetivoGeneral");
var tblObjetivosEspecificos = document.getElementById("tblObjetivosEspecificos");
var tblActividadesTareasRecursos = document.getElementById("tblActividadesTareasRecursos");
var divDiagramaPerfiles = document.getElementById("divDiagramaPerfiles");

const imgParqueChimalhuacan = document.getElementById("imgParqueChimalhuacan");
const imgParqueSucio = document.getElementById("imgParqueSucio");
const diagramaFlujo = document.getElementById("diagramaFlujo");
const fieldObjetivoGeneral = document.getElementById("fieldObjetivoGeneral");
const fieldObjetivosEspecificos = document.getElementById("fieldObjetivosEspecificos");
const fieldPerfilesColaboradores = document.getElementById("fieldPerfilesColaboradores");
const divImgPlanTrabajo = document.getElementById("divImgPlanTrabajo");

var isActivoObjetivoGeneral = true;
function comprimirObjetivoGeneral(){
    if(isActivoObjetivoGeneral){
        divObjetivoGeneral.style.display="none";
        isActivoObjetivoGeneral = false;
    }else{
        divObjetivoGeneral.style.display="block";
        isActivoObjetivoGeneral = true;
    }
}

var isActivoObjetivosEspecificos = true;
function comprimirObjetivosEspecificos(){
    if(isActivoObjetivosEspecificos){
        tblObjetivosEspecificos.style.display="none";
        isActivoObjetivosEspecificos = false;
    }else{
        tblObjetivosEspecificos.style.display="block";
        isActivoObjetivosEspecificos = true;
    }
}

var isActivaTblActividadesTareasRecursos = true;
function comprimirTblActividadesTareasRecursos(){
    if(isActivaTblActividadesTareasRecursos){
        tblActividadesTareasRecursos.style.display="none";
        isActivaTblActividadesTareasRecursos = false;
    }else{
        tblActividadesTareasRecursos.style.display="block";
        isActivaTblActividadesTareasRecursos = true;
    }
}

var isComprimirPerfilesColaboradores = true;
function comprimirPerfilesColaboradores(){
    if(isComprimirPerfilesColaboradores){
        divDiagramaPerfiles.style.display="none";
        isComprimirPerfilesColaboradores = false;
    }else{
        divDiagramaPerfiles.style.display="block";
        isComprimirPerfilesColaboradores = true;
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
}, {threshold: 0.2 });

observer.observe(imgParqueChimalhuacan);
observer.observe(imgParqueSucio);
observer.observe(diagramaFlujo);
observer.observe(fieldObjetivoGeneral);
observer.observe(fieldObjetivosEspecificos);
observer.observe(fieldPerfilesColaboradores);
observer.observe(tblActividadesTareasRecursos);
observer.observe(divImgPlanTrabajo);