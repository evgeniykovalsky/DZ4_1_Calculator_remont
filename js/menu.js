
class RemontForm{
    constructor(){
        this.form=document.getElementsByClassName('form');
        this.globalWrapper=document.querySelector('.globalWrapper');
        this.buttonAdd;
        this.buttonClear;
        this.select=document.getElementById('apatment');
        this.selIndex=document.getElementById('apatment').selectedIndex;
        this.options=document.getElementById('apatment').options;
        this.myImg=document.getElementById('picture');
        this.divWrapper=document.querySelector('.lineWrapper');
        this.price=document.getElementById('price1');
        this.square;
        this.Run=document.querySelector('#run');
          }
   change(){
        this.buttonAdd=document.querySelectorAll('#add');
        this.buttonClear=document.querySelectorAll('#clear');
        this.select.addEventListener('change',()=>{
             
         switch(Number(this.options[ this.select.selectedIndex].value))
         {
             case 500:this.myImg.src='img/office.png';break;
             case 100:this.myImg.src='img/home.png';break;
             case 300:this.myImg.src='img/apartment.png';break;
         }
         this.calculation();  
        });
            
        }
        add(){
           
               let clon=this.divWrapper.cloneNode(true);
               this.globalWrapper.append(clon);
              
               
          }
        clear(target){
                
                this.buttonClear=document.querySelectorAll('#clear');
                if(this.buttonClear.length>1){
                target.parentElement.remove();
                this.calculation();  
                }
               
                  
        }
        calculation(){
            this.square=document.querySelectorAll('#square1');
            let sum=0;
            this.square.forEach(elem=>{
              
             
              sum=sum+Number(elem.value);
                
            });
          
            if(isNaN(sum))
            {
                this.price.innerText='Неверная площадь'; 
            }
            else{
                this.price.innerText=Number(this.options[ this.select.selectedIndex].value)*sum;
            }
                 

        }
    init(){
        this.change();
        this.globalWrapper.addEventListener('click',(elem)=>{
           let target=elem.target;
           
           if(target.matches('#add')){
              this.add();
           }
           else if(target.matches('#clear'))
           {
              this.clear(target);
           }
        });
        this.Run.addEventListener('click',()=>{ this.calculation();})
             
    }
}
let myForm=new RemontForm();
      myForm.init();



