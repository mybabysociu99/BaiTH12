import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  s=0;
  tong=0;
  n: any;
  x: any;
  i=0;j=0;
  t:any;
  l=1;
  Danhsach = [
    {hoten: 'Nguyen Thi Mai', diemthi:9},
    {hoten: 'Tran Thi Anh', diemthi:7.5},
    { hoten: 'Hoang Thi Dung', diemthi:8.3}
  ]
  //bai1
  tinh(sox:string,soL:string){
    for(this.i=1;this.i<=parseFloat(soL);this.i++)
    {
    this.s =this.s+Math.pow(parseFloat(sox),this.i)
    }
  }
//Bài 2

tinh1(){
  let tmp=1;
  for(let i=1;i<=this.n;++i){
      this.tong= this.tong+ (Math.pow(-1,i))*(Math.pow(this.x,i)/Giaithua(i));
  }
}

//Bài 3
ngOnInit(): void {
  let catten = (s) => {
    let n = s.lastIndexOf(' ');
    return s.substr(n + 1) + ' ' + s.substr(0, n);
  }
  let s = [{ hoten: 'Nguyen Thi Mai', dthi: 9 },
  { hoten: 'Tran Thi Anh', dthi: 7.5 },
  { hoten: 'Hoang Thi Dung', dthi: 8.3 }
  ].sort((a, b) => {
    if (catten(a.hoten) > catten(b.hoten)) return 1;
    else if (catten(a.hoten) < catten(b.hoten)) return -1;
    return 0;
  });
  console.log(s);

  //Bài 4
  let d = [{ hoten: 'Nguyen Thi Mai',quequan:'Hung Yen', dthi: 9 },
    { hoten: 'Tran Thi Anh',quequan:'Ha Noi ', dthi: 7.5 },
    { hoten: 'Hoang Thi Dung',quequan:'Hai Phong', dthi: 8.3 }
    ].filter(x=>x.dthi>=8 && x.quequan=='Hai Phong');
    console.log(d);

    //Bài 5

    let sochinhphuong = (n) =>{
      return   Math.pow(Math.floor(Math.sqrt(n)),2)==n;
    }
    let y = [3,4,8,10,25,55].filter(sochinhphuong);
    console.log(y);
}
}
function Giaithua(a: number) {
let gt=1;
for (let i = 1; i <=a; i++) {
  gt*=i;
}
return gt;




}
