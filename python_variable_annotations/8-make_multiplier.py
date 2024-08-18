#!/usr/bin/env python3
"""Multiplier function module"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Input float multiplier, output function"""
    def function(value: float) -> float:
        return value * multiplier
    return function
