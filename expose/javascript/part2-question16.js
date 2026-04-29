for (let i in statistics)
{
    if (statistics[i] % 2 == 1 || i.startsWith("r"))
    {
        alert(statistics[i]);
    }
}