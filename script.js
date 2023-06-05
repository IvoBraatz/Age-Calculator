document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obter os valores dos campos de entrada
    var day = parseInt(document.getElementById('dayInput').value);
    var month = parseInt(document.getElementById('monthInput').value);
    var year = parseInt(document.getElementById('yearInput').value);
  
    // Verificar se os campos são preenchidos corretamente
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      showError('Por favor, preencha todos os campos corretamente.');
      return;
    }
  
    // Obter a data atual
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1; // Os meses em JavaScript são indexados de 0 a 11
    var currentDay = currentDate.getDate();
  
    // Verificar se a data de nascimento é no futuro
    if (year > currentYear || (year === currentYear && month > currentMonth) || (year === currentYear && month === currentMonth && day > currentDay)) {
      showError('Data de nascimento inválida. Por favor, verifique novamente.');
      return;
    }
  
    // Calcular a idade
    var years = currentYear - year;
    var months = currentMonth - month;
    var days = currentDay - day;
  
    // Ajustar a idade com base nos meses e dias
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
    if (days < 0) {
      var prevMonthDate = new Date(currentYear, currentMonth - 1, 0);
      days += prevMonthDate.getDate();
      months--;
    }
  
    // Exibir o resultado
    showResult(years, months, days);
  });
  
  function showResult(years, months, days) {
    document.getElementById('yearsResult').textContent = years;
    document.getElementById('monthsResult').textContent = months;
    document.getElementById('daysResult').textContent = days;
  
    // Remover a classe 'hidden' para exibir o elemento
    document.getElementById('resultContainer').classList.remove('hidden');
    document.getElementById('resultContainer').classList.remove('error');
  
    // Definir a opacidade como 1 após um pequeno atraso
    setTimeout(function() {
      document.getElementById('resultContainer').style.opacity = '1';
    }, 10);
  }
  
  function showError(errorMessage) {
    document.getElementById('yearsResult').textContent = errorMessage;
    document.getElementById('monthsResult').textContent = '';
    document.getElementById('daysResult').textContent = '';
    document.getElementById('resultContainer').classList.remove('hidden');
    document.getElementById('resultContainer').classList.add('error');
  }
  
  