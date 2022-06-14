
using _26_ejercicio_LinQ_extendido.Classes;
using _26_ejercicio_LinQ_extendido.Entities;
using _26_ejercicio_LinQ_extendido.Interfaces;

IDataService DataService = new DataService();
List<ExtendAlumn> ListAlumnsFilteredWhitNote = DataService.ListAlumnsFilteredWhitNote();

foreach (ExtendAlumn Alumn in ListAlumnsFilteredWhitNote)
{
    Console.WriteLine($"Nombre: {Alumn.Name} {Alumn.LastName}\nEdad: {Alumn.Age}\nAsignatura: {Alumn.Class}\nNota: {Alumn.Grade}\n");
};

List<ExtendTeacher> ListTeachersFilteredWhithEvaluation = DataService.ListTeachersFilteredWhithEvaluation();

foreach (ExtendTeacher teacher in ListTeachersFilteredWhithEvaluation)
{
    Console.WriteLine($"Nombre: {teacher.Name} {teacher.LastName}\n Edad: {teacher.Age}\nAsignatura: {teacher.Subject}\nCalidad del 1 al 10: {teacher.Evaluation}");
}