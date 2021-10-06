function sterge()
{
	getElementById('test').reset;
}

function check()
{
	nota = 0;
	var q1 = document.forms["test"]["q1"].value;
	var q2 = document.forms["test"]["q2"].value;
	var q3 = document.forms["test"]["q3"].value;
	var q4 = document.forms["test"]["q4"].value;
	var q5 = document.forms["test"]["q5"].value;
	var q6 = document.forms["test"]["q6"].value;
	var q7 = document.forms["test"]["q7"].value;
	var q8 = document.forms["test"]["q8"].value;
	var q9 = document.forms["test"]["q9"].value;
	var q10 = document.forms["test"]["q10"].value;
	var ca = ["ca1","ca2","ca3","ca4","ca5","ca6","ca7","ca8","ca9","ca10"];
	var id = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"];
    var answers = ["A","B","C","A","B","C","A","B","C","A"];
    var answers1 = ["bag","tube","bottle","pound","jar","containers","gallon","jar","bag","half a pound"];
    var questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
    
    for (let i = 0; i<10; i++)
        {
            if (questions[i] == answers[i] || questions[i] == answers1[i])
                {                   
					document.getElementById(id[i]).style.backgroundColor = "rgb(50, 205, 50, 0.5)"; 
                    nota = nota + 1;
				}
				else
				{
					document.getElementById(id[i]).style.backgroundColor = "rgb(220, 20, 60, 0.5)"; 
					document.getElementById(ca[i]).style.backgroundColor = "rgb(50, 205, 50, 0.5)";
				}
        }
    
	document.getElementById("grade").innerText = "Nota: " + nota;
}

