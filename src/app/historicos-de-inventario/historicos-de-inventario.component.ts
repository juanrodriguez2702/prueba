import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historicos-de-inventario',
  standalone: true,
  imports: [],
  templateUrl: './historicos-de-inventario.component.html',
  styleUrl: './historicos-de-inventario.component.css',

          
})
export class HistoricosDeInventarioComponent implements OnInit {

  barranquilla:string= "barranquilla"

  cambiar(){
    let cambiar = document.querySelectorAll('');
    cambiar
    
  }

  icon:string = "icono"
  
  
  meses_p:string[] = ['34.3%','20.6%','28.8%','64.4%','12.6%'
  ,'98.2%','39.2%','66.2%','32.2%','76.2%','54.2%','67.8%']

  meses_v2 = [
    { porcentaje1: "23.7%", porcentaje2: "34.3%" },
    { porcentaje1: "15.2%", porcentaje2: "20.6%" },
    { porcentaje1: "17.8%", porcentaje2: "28.8%" },
    { porcentaje1: "43.1%", porcentaje2: "64.4%" },
    { porcentaje1: "8.5%", porcentaje2: "12.6%" },
    { porcentaje1: "3.8%", porcentaje2: "98.2%" },
    { porcentaje1: "19.1%", porcentaje2: "39.2%" },
    { porcentaje1: "25.3%", porcentaje2: "66.2%" },
    { porcentaje1: "12.7%", porcentaje2: "32.2%" },
    { porcentaje1: "37.9%", porcentaje2: "76.2%" },
    { porcentaje1: "6.4%", porcentaje2: "54.2%" },
    { porcentaje1: "33.6%", porcentaje2: "67.8%" },
  ]
  loadData(mes:string, indice:number){
    
    for (let index = 1; index <= 6; index++) {
      
      const barra = document.getElementById('barra'+ index)
      barra?.classList.forEach((value)=>{

        if(value!=='progreso' && value!==mes+index){
          barra?.classList.remove(value)
        }
      
      })
      barra?.classList.add (mes+index)
      console.log(index)     

      
    } 
    const inicio = document.getElementById('mensaje1')
    const mensaje1 = document.getElementsByClassName('numero') 
    const mensaje2 = document.getElementsByClassName('numero_por')
    const icon = this.icon
    const porcentaje1 = this.meses_v2[indice-1].porcentaje1 
    const porcentaje2 = this.meses_v2[indice-1].porcentaje2

    if(mensaje1.length && mensaje2.length && icon.length >0){
      mensaje1[0].textContent = ""
      inicio!.classList.remove('ini')
      mensaje1[0].textContent = porcentaje1
      mensaje2[0].textContent = porcentaje2
      this.icon = ("true")
    }
  }
  //fin btn pruebas info
  scrollleft () {
    const contenedor_Sc = document.getElementById('content_Sc');
    console.log(contenedor_Sc!.scrollLeft)
   contenedor_Sc!.scrollLeft -= 120
   }

   scrollrigth () {
     const contenedor_Sc = document.getElementById('content_Sc')
     contenedor_Sc!.scrollLeft += 120
   }

   ngOnInit(): void {

    const btns = document.querySelectorAll('.cambio_a');

    btns.forEach(btn=>{
      btn.addEventListener('click', () => {

        btns.forEach(otroB =>{
          const otb = otroB as HTMLButtonElement
          otb.style.backgroundColor = ""
          otb.style.color = ""
          otb.style.fontSize = ""
          otb.style.fontWeight = ""
        })
        const btn_c = btn as HTMLButtonElement;

        btn_c.style.backgroundColor = "#C5C5D3"
        btn_c.style.color = "#712CEE"
        btn_c.style.transition = ".4s ease"
        btn_c.style.fontSize = "15px"
        btn_c.style.fontWeight = "700"
      })
    })

   }


}
