<template>
  <main id="invoice">
    <div id="logo" class="container">
      <img src="@/assets/logo.svg" alt="">
    </div>

    <div id="contact-details">
      <div class="container">
        <div class="wrapper">
          <div id="to-details" class="details">
            <h2>Aan</h2>
            <ul>
              <li>Bedrijfsnaam hier</li>
              <li>T.a.v. naam opdrachtgever</li>
              <li>Straatnaam 365</li>
              <li>1423 AB Stadsnaam</li>
            </ul>
          </div>
          <div id="from-details" class="details">
            <h2>Van</h2>
            <ul>
              <li>Stalex Digital Services</li>
              <li>Vekenweg 6</li>
              <li>1663 BA De Weere</li>
              <li>KvK: 75869284</li>
              <li>BTW: NL860427249B01</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container" id="factuur">
      <h1>Factuur</h1>
      <hr>
      <div class="details">
        <p>Factuurnummer: F00007</p>
        <p>Factuurdatum: 17-12-2019</p>
        <p>Vervaldatum: 17-01-2020</p>
      </div>
    </div>

    <div class="container" id="table">
      <div class="header table-row">
        <div class="desc">Omschrijving</div>
        <div>Aantal</div>
        <div>Bedrag</div>
        <div>BTW</div>
        <div>Totaal</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
      <div class="table-row">
        <div class="desc">StalexBot license (Basic) subscription 06/2020</div>
        <div>1</div>
        <div>€29.99</div>
        <div>21%</div>
        <div>€29.99</div>
      </div>
    </div>

    <div class="container" id="totals">
      <div class="wrapper">
        <div class="sub-total-item">
          <div>Totaal exclusief BTW:</div>
          <div>€29.99</div>
        </div>
        <div class="sub-total-item">
          <div>BTW (21%):</div>
          <div>€6.45</div>
        </div>
        <hr>
        <div class="sub-total-item bottom">
          <div>Totaal:</div>
          <div>€36.44</div>
        </div>
      </div>
    </div>

    <div class="container" id="text">
      <div class="wrapper">
        Het openstaande bedrag van € 60,50 dient binnen 30 dagen overgemaakt te zijn op rekeningnummer <strong>NL 19
          BUNQ 2038 6264 13</strong> onder vermelding van het factuurnummer F00007
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    variables: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
* {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

main {
  max-width: 210mm;
  min-width: 210mm;
  min-height: 297mm;
  background-color: white;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.container {
  margin: 0 17mm;
}

#logo {
  padding: 9mm 0;
  background-color: white;
}

#logo img {
  width: 70mm;
  height: auto;
}

#contact-details {
  background: #5388c7;
  background: -webkit-gradient(linear, left top, right top, from(#5388c7), to(#1c548e));
  background: linear-gradient(90deg, #5388c7 0%, #1c548e 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5388c7", endColorstr="#1c548e", GradientType=1);
  padding: 7mm 0;
}

#contact-details .wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

#contact-details .wrapper #from-details {
  margin-left: auto;
  text-align: right;
}

#contact-details .wrapper .details {
  color: white;
}

#contact-details .wrapper .details h2 {
  margin-bottom: 3mm;
}

#contact-details .wrapper .details ul {
  padding: 0;
  list-style: none;
}

#contact-details .wrapper .details ul li {
  margin-bottom: 2mm;
  font-size: 9pt;
}

#factuur {
  background-color: white;
  padding: 6mm 0;
}

#factuur h1 {
  color: #1c548e;
  font-size: 20pt;
}

#factuur hr {
  color: #1c548e;
  margin: 4mm 0;
}

#factuur .details {
  font-size: 11pt;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

#table {
  background-color: white;
  padding: 4mm 0;
}

#table .table-row {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 100mm 1fr 1fr 1fr 1fr;
  grid-template-columns: 100mm 1fr 1fr 1fr 1fr;
  text-align: right;
  font-size: 9pt;
}

#table .table-row div {
  padding: 3mm;
  border: 2px solid #1c548e;
  border-right: 0;
  border-bottom: 0;
}

#table .table-row div:first-child {
  padding-left: 0;
  border-left: 0;
}

#table .table-row div:last-child {
  padding-right: 0;
}

#table .table-row.header {
  font-weight: bold;
  font-size: 11pt;
}

#table .table-row.header div {
  border: none;
}

#table .table-row .desc {
  text-align: left;
}

#table .table-row:last-child div {
  border-bottom: 2px solid #1c548e;
}

#totals {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  background-color: white;
  font-size: 10pt;
}

#totals .wrapper {
  width: 65mm;
}

#totals .wrapper hr {
  margin-bottom: 3mm;
}

#totals .wrapper .sub-total-item {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 25mm;
  grid-template-columns: 1fr 25mm;
  margin-bottom: 3mm;
  text-align: right;
}

#totals .wrapper .sub-total-item.bottom {
  margin-bottom: 0;
}

#totals .wrapper .sub-total-item div:first-child {
  font-weight: bold;
}

#text {
  font-size: 10pt;
  background-color: white;
  padding: 15mm 0;
}

#text .wrapper {
  max-width: 160mm;
}

#text strong {
  margin: 0 1mm;
}

</style>
