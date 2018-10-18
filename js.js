const qoutes = [
	{
	name:'Martin Luther King',
	qoute:'Not only will we have to repent for the sins of bad people, but we also will have to repent for the appelling silence of good people. '
	},
	{
	name:'Martin Luther King',
	qoute:'Faith is taking the first step even when you can not see the whole staircase. '
	},
	{
	name:'Lou Holtz',
	qoute:'You are never as good as everyone tells you when you win, and you are as bad as they say when you lose.'
	},
	{
	name:'Maya Angelou',
	qoute:'A bird does not sing because it has an answer, it sings because it has a song.'
	},
	{
	name:'Albert Einstein',
	qoute:'A perfection of means, and confusion of aims, seems to be our main problem.'
	},
	{
	name:'Sigmund Freud',
	qoute:'Dogs love their friends and bite their enemies, quite unlike people, who are incapable of pure love and always have mix love and hate.'
	},
	{
	name:'Voltaire',
	qoute:'Judge a man by his questions rather than by his answers.'
	},
	{
	name:'Nathaniel Hawthorne',
	qoute:'Happiness is a butterfly, which when persude is always just beyond your graps, but which , if you will sit down quietly, may alight upon you.'
	},
	{
	name:'Vivekenanda',
	qoute:'Tell the truth bodly, whatever it hurt or not.Never pander to weakness. If truth is too much for intelligent people and sweeps them away, let them go; the sooner the better.'
	},
    {
	name:'Khalil Gibran',
	qoute:'My loneliness was born when men paised my talkive faults and blamed my silents virtues.'
	},
]

const qoutebtn = document.querySelector('#btn');

const qoute = document.querySelector('#qoute');

const author = document.querySelector('#author');

btn.addEventListener('click', displayqoutes);

function displayqoutes(){

	let number = Math.floor(Math.random()*qoutes.length);
	author.innerHTML = qoutes[number].name;
	qoute.innerHTML = qoutes[number].qoute;
}