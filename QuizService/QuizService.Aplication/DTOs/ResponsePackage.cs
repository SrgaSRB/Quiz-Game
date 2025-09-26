using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Aplication.DTOs
{
    public class ResponsePackage<T>
    {
        public bool Status { get; set; } = true;

        public string Message { get; set; } = "";

        public T? Data { get; set; }

        public ResponsePackage(T data, bool status = true, string message = "")
        {
            Data = data;
            Status = status;
            Message = message;
        }

        public ResponsePackage(bool status, string message)
        {
            Status = status;
            Message = message;
        }

    }
}
