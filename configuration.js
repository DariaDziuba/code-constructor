import {Colors} from './components/constants';

export const Configuration = {
    FIRST_LAB : {
        show: true,
        topic: 'Виконати обчислення від\'ємних елементів кожного рядку матриці',
        title: 'Перша лабораторна робота',
        screenName: 'FirstLab',
        consoleOutput: 'lab1.png',
        blocks: [{
            position: 1,
            title: 'Підключення бібліотек та ініціалізація змінних',
            checked: false,
            codeSnippet: 'using System;\n' +
            'using System.Threading;\n\n' +
            'class Program\n{\n\tstatic int number = 10;\n\tstatic int[,] mas = new int[number, number];\n' +
            '\tstatic Random rnd = new Random();\n\n\tpublic static void Main()\n\t{\n\tint i, j, workerThreads, portThreads;\n'
        },
        {
            position: 2,
            title: 'Заповнення матриці випадковими числами, виведення на екран',
            checked: false,
            codeSnippet: '\t\tfor (i = 0; i < number; i++)\n\t\t\tfor (j = 0; j < number; j++)\n' +
            '\t\t\t\tmas[i, j] = rnd.Next(-10, 10);\n\n\t\tfor (i = 0; i < number; i++) \n\t\t{\n' +
            '\t\t\tfor (j = 0; j < number; j++)\n\t\t\t{\n' +
            '\t\t\t\tConsole.Write(String.Format("{0,3}", mas[i, j]));\n\t\t\t}\n\t\t\tConsole.WriteLine();\n\t\t}\n\n'
        },
        {
            position: 3,
            title: 'Встановлення потоків',
            checked: false,
            codeSnippet: '\t\t\Console.WriteLine("\\nProcessor=" + Environment.ProcessorCount);\n' +
            '\t\tThreadPool.GetMaxThreads(out workerThreads, out portThreads);\n' +
            '\t\tConsole.WriteLine("\\nMaximum worker threads: \\t{0}" + "\\nMaximum completion port threads: {1}",\n' +
            '\t\t\tworkerThreads, portThreads);\n' +
            '\t\tint MaxworkThreadsCount = 2 * Environment.ProcessorCount, MaxportThreadsCount = 2 * Environment.ProcessorCount;\n\n' +
            '\t\t// Встановимо максимальну кількість робочих потоків\n' +
            '\t\tThreadPool.SetMaxThreads(MaxworkThreadsCount, MaxportThreadsCount);\n\n' +
            '\t\t// Встановимо мінімальну кількість робочих потоків\n' +
            '\t\tThreadPool.SetMinThreads(MaxworkThreadsCount, MaxportThreadsCount);\n' +
            '\t\tThreadPool.GetMaxThreads(out workerThreads, out portThreads);\n' +
            '\t\tConsole.WriteLine("\\nMaximum worker threads: \\t{0}" + "\\nMaximum completion port threads: {1}",\n' +
            '\t\t\tworkerThreads, portThreads);\n\n'
        },
        {
            position: 4,
            title: 'Створення пулу потоків',
            checked: false,
            codeSnippet: '\t\tConsole.WriteLine("\\nstart time=" + DateTime.Now.Millisecond);\n' +
            '\t\tfor (i = 0; i < mas.GetLength(0); i++)\n' +
            '\t\t{\n' +
            '\t\t\tThreadPool.QueueUserWorkItem(Function, i);\n' +
            '\t\t}\n' +
            '\t\tConsole.WriteLine("\\nend time=" + DateTime.Now.Millisecond);\n' +
            '\t\tConsole.ReadLine();\n' +
            '\t}\n'
        },
        {
            position: 5,
            title: 'Функція обчислення елементів рядка матриці',
            checked: false,
            codeSnippet: '\tpublic static void Function(object instance)\n' +
            '\t{\n' +
            '\t\tint line = (int)instance, result = 1, i;\n' +
            '\t\tfor (i = 0; i < number; i++)\n' +
            '\t\t{\n' +
            '\t\t\tif (mas[line, i] < 0)\n' +
            '\t\t\t{\n' +
            '\t\t\t\tresult *= mas[line, i];\n' +
            '\t\t\t}\n' +
            '\t\t}\n\n' +
            '\t\tThread.Sleep(500);\n' +
            '\t\tConsole.WriteLine("line number= " + (line + 1) + " result= " + result);\n' +
            '\t}\n' +
            '}'
        }]
    }
};