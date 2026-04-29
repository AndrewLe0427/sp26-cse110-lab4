1. values added:  20
2. final result:  20
3. var has function scope, so declaring in a block does not prevent it from being accessed outside of that block in the same function. This causes a lot of inconvinience and possible bugs.
4. values added:  20
5. ERROR! Because this time, result does not exist outside of the if block, so this line cannot access that variable.
6. ERROR! Because since variable result is a constant, you cannot modify it.
7. ERROR! The error above this line has already stopped the compiler, but even if it does not, the compiler will return an error anyway because it cannot access variable result, as const uses the same scope as let.
