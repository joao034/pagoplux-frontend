import { Component, OnInit } from '@angular/core';
import { PayboxData } from '../../interfaces';

@Component({
  selector: 'app-payment-button',
  standalone: true,
  imports: [],
  templateUrl: './payment-button.component.html',
  styleUrl: './payment-button.component.css',
})
export class PaymentButtonComponent implements OnInit {

  private getPayboxData() : PayboxData {
    return {
      /* Requerido. Email del establecimiento o Id/Class del elemento html que posee el valor*/
      PayboxRemail: 'dmorales@pagoplux.com',
      /* Opcional. Email del usuario que realiza el pago o Id/Class del elemento html que posee el valor */
      PayboxSendmail: 'joaojacomedev@gmail.com',
      /* Rquerido. Nombre del usuario/cuenta PagoPlux o Id/Class del elemento html que posee el valor */
      PayboxRename: 'Negocio Test',
      /* Opcional. nombre de persona que realiza el pago o Id/Class del elemento html */
      PayboxSendname: 'Joao Jacome',
      /* Requerido. Valor Base 0. Valor que no incluye impuesto */
      PayboxBase0: '2.0',
      /* Requerido. Valor Base 12. Valor que si incluye impuesto */
      PayboxBase12: '10.0',
      /* Requerido. Descripcion del pago o Id/Class del elemento html que posee el valor */
      PayboxDescription: 'Pago test',
      /* Opcional. Lenguaje del Paybox
       * Español: es | (string) (Paybox en español)
       * Ingles: us | (string) (Paybox en Ingles)
       */
      PayboxLanguage: 'es',
      /*
       * Requerido. direccion del pago
       */
      PayboxDirection: 'Ambato',
      /*
       * Requerido. Teléfono del cliente.
       */
      PayBoxClientPhone: '0999826595',
      /**
       * True -> produccion
       * False -> test
       */
      PayboxProduction: false,
      // ===============================LOS SIGUIENTES PARAMETROS SOLO SE USA EN PAGOS RECURRENTES============================================
      /*
      * True -> en caso de realizar un pago recurrente almacena datos
      tarjeta
      * False -> si es pago normal
      */
      PayboxRecurrent: false,
      /**
      * Id o nombre del plan registrado en el comercio en la plataforma de
      pagoplux (el nombre debe ser exacto)
      */
      PayboxIdPlan: '171',
      /**
      * true -> los cobros se realizan de manera automatica segun la
      frecuencia del plan asignado en PAGOPLUX
      * false -> los cobros se realizan mediante solicitud
      */
      PayboxPermitirCalendarizar: true,
      /**
      * true -> El débito se realiza en el momento del pago
      * false -> El débito se realizará en la fecha de corte según el plan
      contratado
      */
      PayboxPagoInmediato: true,
      /**
      * true -> si desea realizar un pago de prueba de 1$ y reverso del
      mismo de manera automática
      * nota: PayboxPagoImediato debe ser igual false
      * false -> no se realizara ningún cobro de prueba
      */
      PayboxCobroPrueba: false,
      /**
       * * Valor de identificación de tarjetahabiente
       */
      PayBoxClientIdentification: '1851005361',
      /**
      * Entorno de ejecución del botón de pagos valores: prod (ambiente
      de producción), sandbox (ambiente de pruebas)
      */
      PayboxEnvironment: 'sandbox',

      //<----ESTAS VARIABLES SE USAN PARA PAGOS RECURRENTES CON MONTO VARIABLES ---->
      PayboxAmountVariablePlan: true,
      /**
      * Frecuencia del plan
      "SEM" SEMANAL
      "MEN" MENSUAL
      "BME" BIMESTRAL
      "TME" TRIMESTRAL
      "SME" SEMESTRAL
      "ANU" ANUAL
      */
      PayboxFrequencyPlan: 'MEN',
      /**
       * true ->tiene iva
       * false ->no tiene iva
       */
      PayboxTieneIvaPlan: true,
      /**
       * La descripción del plan, no debe superar los 200 caracteres.
       */
      PayboxDescriptionPlan: 'Descripcion plan',
      /**
      * Se usa en TRUE cuando se necesita enlazar el paybox a un botón ya
      existente en el sitio del cliente, caso contrario FALSE o NULL
      * */
      PayboxPagoPlux: true,
      /**
       * Identificador del botón o elemento en el comercio del cliente
       * */
      PayboxIdElement: 'ButtonPaybox',
    };
  }

  ngOnInit(): void {
    (globalThis as any).data = this.getPayboxData();

    (globalThis as any).onAuthorize = ( response: any ) => {
      if( response.status === 'succeeded'){
        console.log('Pago exitoso: ', response)
      }else{
        console.log('Pago sin exito: ', response)
      }
    }
  }
}
