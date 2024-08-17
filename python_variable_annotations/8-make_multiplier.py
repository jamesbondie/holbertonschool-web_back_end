from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    def function(multiplier: float) -> float:
        return multiplier ** 2
    return function
