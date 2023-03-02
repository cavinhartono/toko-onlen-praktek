async function getData(params) {
  const APIKEY = "AIzaSyBy-3x2wrEoQd4HBJrRL7QomTk10vDkHLw";
  const spreadsheet = "1hxjdw7TqpRcRsSDK4sUnHPIFNi1eEifcglNcPGKbtZI";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheet}/?key=${APIKEY}&includeGridData=true`;
  const result = await fetch(url);
  const { sheets } = await result.json();
  const getSheet = sheets[0];
  const data = getSheet.data[0].rowData
    .filter((_, index) => !== 0)
    .map(row => {
      const { values } = row;
      return {
        name: values[0].formattedValue,
        email: values[1].formattedValue,
      }
    })
    return data;
}



