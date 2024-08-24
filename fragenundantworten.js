// page link - https://www.lebenindeutschland.eu/fragenkatalog/1
// there are 10 pages for general questions and 1 for state specific

let output = [];
const questionBlocks = document.querySelectorAll('div.p-4.mb-8.bg-white.dark\\:bg-gray-900.shadow.rounded-lg.max-w-lg');

questionBlocks.forEach(block => {
    const questionText = block.querySelector('h3').innerText.trim();
    const correctAnswer = block.querySelector('span.bg-green-100, span.dark\\:bg-green-800').parentElement.innerText.trim();
    output.push(`Question: ${questionText}\nCorrect Answer: ${correctAnswer}\n--------------------------------------\n`);
});

const blob = new Blob([output.join('\n')], { type: 'text/plain' });

const link = document.createElement('a');
link.download = 'questions_and_answers.txt';
link.href = window.URL.createObjectURL(blob);
document.body.appendChild(link);
link.click();

// lol
document.body.removeChild(link);
