using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor.Services
{
    public class AppData
    {
        public string Theme { get; set; }
        public string imgLink = "https://raw.githubusercontent.com/kalenwallin/portfolio.v1/gpages/img/";
        public event Action OnChange;

        public void SetTheme(string theme)
        {
            Theme = theme;
            NotifyStateChanged();
        }

        private void NotifyStateChanged()
        {
            OnChange?.Invoke();
        }
        public string GetImageLink(string image)
        {
            return $"{imgLink}{image}";
        }
    }
}
