export const Configuration = {
    FIRST_LAB : {
        show: true,
        topic: 'Виконати обчислення виразу за допомогою класу Thread',
        title: '1. Робота з класом Thread',
        consoleOutput: 'Введiть X1:1\n\n' +
            'Введiть X2:2\n\n' +
            'Введiть X3:3\n\n' +
            'Введiть X4:4\n\n' +
            'Current Time12/26/2022 9:02:58 PM\n\n' +
            'Thread 2 State=Running\n' +
            'Thread 1 State=Running\n\n' +
            'Current Time 12/26/2022 9:03:06 PM\n\n' +
            'Thread 1 State=Stopped\n' +
            'Thread 2 State=Stopped\n\n' +
            'Current Time 12/26/2022 9:03:06 PM\n\n' +
            'Thread 3 State=Running\n' +
            'Thread 4 State=Running\n\n' +
            'Current Time 12/26/2022 9:03:07 PM\n\n' +
            'Result: 3',
        blocks: [
            {
                position: 0,
                title: 'Ініціалізація',
                data: [
                    {
                        key: 'Підключення бібліотек',
                        value: false,
                        codeSnippet: 'using System;\n' +
                        'using System.Threading;'
                    },
                    {
                        key: 'Ініціалізація namespace та class',
                        value: false,
                        codeSnippet:'\n\nnamespace Lab1\n{\n\t' +
                            'class Program\n\t{'
                    },
                    {
                        key: 'Ініціалізація змінних',
                        value: false,
                        codeSnippet: '\n\t\tstatic int x1, x2, x3, x4;\n' +
                            '\t\tstatic int numerator1, numerator2, denumerator1' +
                            'denumerator2, application1, application2, sum;'
                    }
                ],
                checked: false
            },
            {
                position: 1,
                title: 'Ініціалізація потоків та зчитування даних',
                data: [
                    {
                        key: 'Ініціалізація класу Thread',
                        value: false,
                        codeSnippet: '\n\t\tstatic void Main(string[] args)\n\t\t{\n' +
                            '\t\t\tlong i;\n\n' +
                            '\t\t\tThread[] thr = {\n' +
                            '\t\t\t\tnew Thread(new ThreadStart(FirstOperation)),\n' +
                            '\t\t\t\tnew Thread(new ThreadStart(SecondOperation)),\n' +
                            '\t\t\t\tnew Thread(new ThreadStart(ThirdOperation)),\n' +
                            '\t\t\t\tnew Thread(new ThreadStart(FourthOperation))\n\t\t\t};\n'
                    },
                    {
                        key: 'Запит на введення даних',
                        value: false,
                        codeSnippet: '\n\t\t\tConsole.Write("Введiть X1:");\n' +
                            '\t\t\tx1 = int.Parse(Console.ReadLine());\n' +
                            '\t\t\tConsole.Write("Введiть X2:");\n' +
                            '\t\t\tx2 = int.Parse(Console.ReadLine());\n' +
                            '\t\t\tConsole.Write("Введiть X3:");\n' +
                            '\t\t\tx3 = int.Parse(Console.ReadLine());\n' +
                            '\t\t\tConsole.Write("Введiть X4:");\n' +
                            '\t\t\tx4 = int.Parse(Console.ReadLine());\n'
                    }
                ],
            },
            {
                position: 2,
                title: 'Робота з потоками',
                data: [
                    {
                        key: 'Запуск роботи перших двох потоків',
                        value: false,
                        codeSnippet: '\n\t\t\tConsole.WriteLine("Current Time" + DateTime.UtcNow.ToString() + "\\n");' +
                            '\n\t\t\tfor (i = 0; i < 2; i++)\n\t\t\t{' +
                            '\n\t\t\t\tthr[i].Start();\n\t\t\t}' +
                            '\n\t\t\tfor (i = 0; i < 2; i++)\n\t\t\t}' +
                            '\n\t\t\t\tthr[i].Join();\n\t\t\t}\n' +
                            '\n\t\t\tConsole.WriteLine("\\nCurrent Time " + DateTime.UtcNow.ToString() + "\\n");\n'
                    },
                    {
                        key: 'Виведення стану перших двох потоків',
                        value: false,
                        codeSnippet: '\n\t\t\tfor (i = 0; i < 2; i++)\n\t\t\t{' +
                            '\n\t\t\t\tConsole.WriteLine("Thread " + (i + 1)' +
                            '" State=" + thr[i].ThreadState);;\n\t\t\t}\n' +
                            '\n\t\t\tConsole.WriteLine("\\nCurrent Time " + DateTime.UtcNow.ToString() + "\\n");\n'
                    },
                    {
                        key: 'Виконання дії ділення третім потоком',
                        value: false,
                        codeSnippet: '\n\t\t\t//division' +
                        '\n\t\t\tthr[2].Start();' +
                        '\n\t\t\tthr[2].Join(); \n'
                    },
                    {
                        key: 'Виконання дії додавання третім потоком',
                        value: false,
                        codeSnippet: '\n\t\t\t//addition' +
                        '\n\t\t\tthr[3].Start();' +
                        '\n\t\t\tthr[3].Join();\n' +
                        '\n\t\t\tConsole.WriteLine("\\nCurrent Time " + DateTime.UtcNow.ToString() + "\\n");\n'
                    }
                ]
            },
            {
                position: 3,
                title: 'Виведення результату',
                checked: false,
                codeSnippet: '\n\t\t\tConsole.WriteLine("Result: " + sum);'+
                '\n\t\t\tConsole.ReadKey();\n\t\t}\n'
            },
            {
                position: 4,
                title: 'Функції обчислення даних',
                checked: false,
                data: [
                    {
                        key: 'Опис функціїї FirstOperation',
                        value: false,
                        codeSnippet: '\n\t\tstatic void FirstOperation()\n\t\t{' +
                            '\n\t\t\tlong i;\n' +
                            '\n\t\t\tConsole.WriteLine("Thread 1 State=" + Thread.CurrentThread.ThreadState);' +
                            '\n\t\t\tfor (i = 0; i < 100000000; i++)\n\t\t\t{' +
                            '\n\t\t\t\tnumerator1 = (int)Math.Pow(x2, 2);' +
                            '\n\t\t\t\tnumerator2 = (int)Math.Pow(x3, 2);\n\t\t\t}\n\t\t}\n'
                    },
                    {
                        key: 'Опис функціїї SecondOperation',
                        value: false,
                        codeSnippet: '\n\t\tstatic void SecondOperation()\n\t\t{' +
                            '\n\t\t\tlong i;\n' +
                            '\n\t\t\tConsole.WriteLine("Thread 2 State=" + Thread.CurrentThread.ThreadState);' +
                            '\n\t\t\tfor (i = 0; i < 100000000; i++)\n\t\t\t{' +
                            '\n\t\t\t\tdenumerator1 = x1 * x3;' +
                            '\n\t\t\t\t denumerator2 = x1 * x4;\n\t\t\t}\n\t\t}\n'
                    },
                    {
                        key: 'Опис функціїї ThirdOperation',
                        value: false,
                        codeSnippet: '\n\t\tstatic void ThirdOperation()\n\t\t{' +
                            '\n\t\t\tlong i;\n' +
                            '\n\t\t\tConsole.WriteLine("Thread 3 State=" + Thread.CurrentThread.ThreadState);' +
                            '\n\t\t\tfor (i = 0; i < 100000000; i++)\n\t\t\t{' +
                            '\n\t\t\t\tapplication1 = numerator1 / denumerator1;' +
                            '\n\t\t\t\tapplication2 = numerator2 / denumerator2;\n\t\t\t}\n\t\t}\n'
                    },
                    {
                        key: 'Опис функціїї FourthOperation',
                        value: false,
                        codeSnippet: '\n\t\tstatic void FourthOperation()\n\t\t{' +
                            '\n\t\t\tlong i;\n' +
                            '\n\t\t\tConsole.WriteLine("Thread 4 State=" + Thread.CurrentThread.ThreadState);' +
                            '\n\t\t\tfor (i = 0; i < 100000000; i++)\n\t\t\t{' +
                            '\n\t\t\t\tsum = application1 + application2;\n\t\t\t}\n\t\t}\n' +
                            '\t}\n}'
                    }
                ]
            }
        ]
    },
    SECOND_LAB : {
        show: true,
        topic: 'Виконати обчислення від\'ємних елементів кожного рядку матриці',
        title: '2. Робота з класом ThreadPool',
        consoleOutput: '7  8  8  8  2  0 -7  8 -3-10\n' +
            '3 -6 -5 -8  0 -1  4-10  8  2\n' +
            '-5  2 -7 -9  9-10  9 -6 -3 -8\n' +
            '-8  1  0  2  4 -6 -1  3 -8 -6\n' +
            '-8 -1 -5  7 -4  9 -5  9 -7  3\n' +
            '-1-10-10 -1 -1 -5  4  6  8  1\n' +
            '0  9  1 -5  7 -8  4  3 -3 -4\n' +
            '-10 -9  7  4  0  5 -4 -5  5  9\n' +
            '5  9-10  3  3 -8  1-10 -8 -1\n' +
            '-1  2  4  0  3 -7  8-10-10 -7\n\n' +
            'Processor=12\n\n' +
            'Maximum worker threads:         2047\n' +
            'Maximum completion port threads: 1000\n\n' +
            'Maximum worker threads:         24\n' +
            'Maximum completion port threads: 24\n\n' +
            'start time=959\n\n' +
            'end time=963\n' +
            'line number= 10 result= -4900\n' +
            'line number= 5 result= 5600\n' +
            'line number= 1 result= -210\n' +
            'line number= 4 result= -2304\n' +
            'line number= 2 result= -2400\n' +
            'line number= 8 result= 1800\n' +
            'line number= 7 result= 480\n' +
            'line number= 9 result= -6400\n' +
            'line number= 6 result= 500\n' +
            'line number= 3 result= -453600\n',
        blocks: [
            {
                position: 0,
                title: 'Ініціалізація',
                data: [
                    {
                        key: 'Підключення бібліотек',
                        value: false,
                        codeSnippet: 'using System;\n' +
                        'using System.Threading;\n\n'
                    },
                    {
                        key: 'ініціалізація змінних',
                        value: false,
                        codeSnippet: 'class Program\n{\n\tstatic int number = 10;\n\tstatic int[,] mas = new int[number, number];\n' +
                            '\tstatic Random rnd = new Random();\n\n\tpublic static void Main()\n\t{\n\tint i, j, workerThreads, portThreads;\n'
                    }
                ],
                checked: false
            },
            {
                position: 1,
                title: 'Робота із матрицею',
                data: [
                    {
                        key: 'Заповнення матриці випадковими числами',
                        value: false,
                        codeSnippet: '\t\tfor (i = 0; i < number; i++)\n\t\t\tfor (j = 0; j < number; j++)\n' +
                            '\t\t\t\tmas[i, j] = rnd.Next(-10, 10);\n\n\t\tfor (i = 0; i < number; i++) \n\t\t{\n'
                    },
                    {
                        key: 'Виведення матриці',
                        value: false,
                        codeSnippet: '\t\t\tfor (j = 0; j < number; j++)\n\t\t\t{\n' +
                            '\t\t\t\tConsole.Write(String.Format("{0,3}", mas[i, j]));\n\t\t\t}\n\t\t\tConsole.WriteLine();\n\t\t}\n\n'
                    }
                ],
                checked: false
            },
            {
                position: 2,
                title: 'Робота з потоками',
                data: [
                    {
                        key: 'Встановлення потоків',
                        value: false,
                        codeSnippet:'\t\t\Console.WriteLine("\\nProcessor=" + Environment.ProcessorCount);\n' +
                        '\t\tThreadPool.GetMaxThreads(out workerThreads, out portThreads);\n' +
                        '\t\tConsole.WriteLine("\\nMaximum worker threads: \\t{0}" + "\\nMaximum completion port threads: {1}",\n' +
                        '\t\t\tworkerThreads, portThreads);\n' +
                        '\t\tint MaxworkThreadsCount = 2 * Environment.ProcessorCount, MaxportThreadsCount = 2 * Environment.ProcessorCount;\n\n'
                    },
                    {
                        key: 'Встановлення максимальної кількості робочих потоків',
                        value: false,
                        codeSnippet: '\t\t// Встановимо максимальну кількість робочих потоків\n' +
                        '\t\tThreadPool.SetMaxThreads(MaxworkThreadsCount, MaxportThreadsCount);\n\n'
                    },
                    {
                        key: 'Встановлення мінімальної кількості робочих потоків',
                        value: false,
                        codeSnippet: '\t\t// Встановимо мінімальну кількість робочих потоків\n' +
                        '\t\tThreadPool.SetMinThreads(MaxworkThreadsCount, MaxportThreadsCount);\n' +
                        '\t\tThreadPool.GetMaxThreads(out workerThreads, out portThreads);\n' +
                        '\t\tConsole.WriteLine("\\nMaximum worker threads: \\t{0}" + "\\nMaximum completion port threads: {1}",\n' +
                        '\t\t\tworkerThreads, portThreads);\n\n'
                    }
                ],
                checked: false
            },
            {
                position: 3,
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
                position: 4,
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
            }
        ]
    }
};