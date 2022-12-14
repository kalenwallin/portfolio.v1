using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor.Services
{
    public class AppData
    {
        public string Theme { get; set; }
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
    }
}
