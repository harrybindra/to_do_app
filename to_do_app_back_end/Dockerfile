# Build stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
RUN 
COPY ["to_do_app_be/to_do_app_be.csproj", "to_do_app_be/"]
RUN dotnet restore "to_do_app_be/to_do_app_be.csproj"
COPY . .
RUN dotnet publish "to_do_app_be/to_do_app_be.csproj" -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "to_do_app_be.dll"]

