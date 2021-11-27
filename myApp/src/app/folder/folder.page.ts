import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  display = '0';
  firstval: number = null;
  operator: any = null;
  newcursor = false;
  isc = false;
  iscomma = false;

  click(val: any) {
    switch (val) {
      case 'ac':
        this.display = '0';
        this.firstval = null;
        this.operator = null;
        this.newcursor = false;
        break;
      case 'c':
        this.display = '0';
        this.firstval = null;
        this.isc = false;
        break;
      case 'm':
        this.display = '0';
        this.firstval = null;
        this.isc = false;
        break;
      case 'mr':
        this.display = '0';
        this.firstval = null;
        this.isc = false;
        break;
      case '%':
        this.addoperadores('%');
        break;
      case 'X':
        this.addoperadores('X');
        break;
      case '-':
        this.addoperadores('-');
        break;
      case '+':
        this.addoperadores('+');
        break;
      case '=':
        if (this.firstval !== null && this.operator !== null) {
          this.calculadorafuncion();
        }
        this.operator = null;
        break;
      case '0':
        this.addNumero('0');
        break;
      case '1':
        this.addNumero('1');
        break;
      case '2':
        this.addNumero('2');
        break;
      case '3':
        this.addNumero('3');
        break;
      case '4':
        this.addNumero('4');
        break;
      case '5':
        this.addNumero('5');
        break;
      case '6':
        this.addNumero('6');
        break;
      case '7':
        this.addNumero('7');
        break;
      case '8':
        this.addNumero('8');
        break;
      case '9':
        this.addNumero('9');
        break;
    }
  }
  addNumero(nbr: string) {
    if (nbr === '0') {
      if (this.newcursor === true) {
        this.display = nbr;
        this.newcursor = false;
      } else if (this.display !== '0') {
        if (this.iscomma === true) {
          this.display = `${this.display.toString()}.${nbr}`;
        } else {
          this.display = this.display.toString() + nbr;
        }
      } else if (this.display === '0') {
        if (this.iscomma === true) {
          this.display = `${this.display.toString()}.${nbr}`;
        }
      }
    } else {
      if (this.newcursor === true) {
        this.display = nbr;
        this.newcursor = false;
      } else if (this.display === '0') {
        if (this.iscomma === true) {
          if (this.display.toString().indexOf('.') > -1) {
            this.display = this.display.toString() + nbr;
          } else {
            this.display = `${this.display.toString()}.${nbr}`;
          }
        } else {
          this.display = nbr;
        }
      } else {
        if (this.iscomma === true) {
          if (this.display.toString().indexOf('.') > -1) {
            this.display = this.display.toString() + nbr;
          } else {
            this.display = `${this.display.toString()}.${nbr}`;
          }
        } else {
          this.display = this.display.toString() + nbr;
        }
      }
    }
    this.isc = true;
  }
  
  addoperadores(op: string) {
    if (this.newcursor === false) {
      if (this.firstval === null) {
        if (this.iscomma === true) {
          this.firstval = parseFloat(this.display);
        } else {
          this.firstval = parseInt(this.display, 0);
        }
      }
      if (this.firstval !== null && this.operator !== null) {
        this.calculadorafuncion();
      }
    }
    this.iscomma = false;
    this.operator = op;
    this.newcursor = true;
  }
  calculadorafuncion() {
    switch (this.operator) {
      case '%':
        if (this.iscomma === true) {
          this.firstval = (this.firstval / parseFloat(this.display));
        }else {
          this.firstval = (this.firstval / parseInt(this.display,0));
        }
        break;
      case 'X':
        if (this.iscomma === true) {
          this.firstval = (this.firstval * parseFloat(this.display));
        } else {
          this.firstval = (this.firstval * parseInt(this.display, 0));
        }
        break;
      case '-':
        if (this.iscomma === true) {
          this.firstval = (this.firstval - parseFloat(this.display));
        } else {
          this.firstval = (this.firstval - parseInt(this.display, 0));
        }
        break;
      case '+':
        if (this.iscomma === true) {
          this.firstval = (this.firstval + parseFloat(this.display));
        } else {
          this.firstval = (this.firstval + parseInt(this.display, 0));
        }
        break;
    }
    this.display = this.firstval.toString();
  }

}
