# Portfolio.v1

https://github.com/kalenwallin/portfolio.v1/assets/31481852/a3108372-fc3d-49e5-a818-669fdf8886f9

[Learn more about this project on my blog](https://blog.kalenwallin.com/portfoliov1)

## Running on macOS

**1. Install .NET SDK:**

```bash
brew install --cask dotnet-sdk
```

**2. Run the project:**

```bash
dotnet run
```

This will start a development server (usually at `http://localhost:5000`).

`dotnet watch run` doesn't work with the version of blazor we have. And the project doesn't support upgrades.

**3. Or build and publish:**

```bash
dotnet build
# or for production
dotnet publish -c Release
```
