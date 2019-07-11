//Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    //Hide results
    document.getElementById('results').style.display = 'none';

    //Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 1000);
    
    e.preventDefault();
});

//Calculate Results

function calculateResults(){
    //UI Vars

    const amountconsumption = document.getElementById('consumption');
    const spending = document.getElementById('spending');
    const investment = document.getElementById('investment');
    const total_exports = document.getElementById('total_exports');
    const total_import = document.getElementById('total_import');
    const LastYearGDP = document.getElementById('LastYearGDP');
    const gdp_spending = document.getElementById('gdp_spending')
    const growth_rate = document.getElementById('growth_rate')
    const net_export = document.getElementById('net_export');

    const nexport = parseFloat(total_exports.value) - parseFloat(total_import.value);
    const spent = parseFloat(nexport.value) + parseFloat(spending.value) + parseFloat(investment.value) + parseFloat(amountconsumption.value);
    const x = parseFloat(spent.value) - parseFloat(LastYearGDP.value);
    const grate = x / parseFloat(LastYearGDP.value) *100;

    if (isFinite(spent)){

        growth_rate.value = grate.toFixed(2);
        gdp_spending.value = spent.toFixed(2);
        net_export.value = nexport.toFixed(2);

        //Show results
        document.getElementById('results').style.display = ' block';

        //Hide loader
        document.getElementById('loading').style.alignContent.display = 'none';

    }else{
        showError('Please check your numbers');
    }
}

//Show error
function showError(error){
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Hide loader
    document.getElementById('loading').style.display = 'none';
  
    // Create a div
    const errorDiv = document.createElement('div');
  
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
    // Add class
    errorDiv.className = 'alert alert-danger';
  
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
  
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
  
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }

//Clear error
function clearError(){
    document.querySelector('.alert').remove();
}