import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Contacto } from "src/app/interfaces/contacto.interface";
import { ContactosService } from "src/app/services/contactos.service";
import { ContactoComponent } from "./contacto.component"

describe('contact component', () => {

  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        declarations: [
          ContactoComponent
        ],
        providers: [
          ContactosService
        ]
      }
    )
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('component load', () => {
    // const component = new ContactoComponent();
    expect(component).toBeDefined();
    fixture.detectChanges();
  })

  it('property contacts is 1', () => {
    // const component = new ContactoComponent();
    component.getAll();
    expect(component.arrContactos.length).toBe(1);
  })

  it('create contact', () => {
    // const component = new ContactoComponent();
    const long = component.arrContactos.length
    const contacto: Contacto = { name: 'Ismael', mail: 'ism@gmail', phone: '678876678' };
    component.add(contacto);
    component.getAll();
    expect(component.arrContactos.length).toBe(long + 1);
    expect(component.response).toBe('insertado');
  })

  it('delete contact', () => {
    const long = component.arrContactos.length;
    component.deleteContacto(1);
    component.getAll();
    expect(component.arrContactos.length).toBe(long - 1);
    expect(component.responseDelete).toBe('borrado');
  })
})