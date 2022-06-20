export function hasNumber(myString) {
    return /\d/.test(myString);
  }

export function readVisaFile(file, returnFunction){
    const reader = new FileReader()
            reader.onload = () => {
                
              const content = reader.result
              let data = [];
              content.split(/\r?\n/).forEach((line) => {
                const card = line.split(";")[0];
                const date = line.split(";")[1];
                const purchaseLocation = line.split(";")[2];
                const currency = line.split(";")[4];
                const columnPrice = line.split(";")[5];
                if(purchaseLocation && !purchaseLocation.includes("SU PAGO EN") && hasNumber(columnPrice)){
                    const price = parseFloat(columnPrice ? columnPrice.replace(",","") : 0);
                    const cuotas = purchaseLocation.substring(purchaseLocation.length-5).trim();
                    const shop = purchaseLocation.substring(0,purchaseLocation.length-5).trim();
                    const cardEnding = card.substring(card.length-4);
                    data.push({cardEnding, date, cuotas, currency, shop, price})
                }
              
               
            });
            returnFunction(data);

            }
            reader.readAsText(file);
}
function getMonthName(monthsToAdd){
    let date = new Date();

    date = new Date(date.setMonth(date.getMonth()+monthsToAdd));

    return date.toLocaleString('default', { month: 'long' }).toUpperCase()+" "+ date.getFullYear();;
}
function addDataToObject(groupedData, data, monthsToAdd){
    const month = getMonthName(monthsToAdd);
    if(groupedData[month]){
        groupedData[month] = [...groupedData[month], data]
    }else{
        groupedData = {...groupedData, [month]:[data]}
    }

    return groupedData;
}
export function groupData(fileContent){

    let groupedData = {};
    fileContent.forEach(data => {

        const { cuotas } = data;

        if(cuotas.includes("/")){
            const cuotaActual = parseInt(cuotas.split("/")[0]);
            const cantidadCuotas = parseInt(cuotas.split("/")[1]);
            for(let i = 0 ; i <= cantidadCuotas - cuotaActual; i++){
                const textCuota = `${cuotaActual+i} / ${cantidadCuotas}`;
                const dataExpense = {...data, cuota: textCuota};
                groupedData = addDataToObject(groupedData, dataExpense, i);

            }
        
        }else{
            const dataExpense = {...data, cuota: "-"};
            groupedData = addDataToObject(groupedData, dataExpense, 0);
        }
      

    })

    return groupedData;
}