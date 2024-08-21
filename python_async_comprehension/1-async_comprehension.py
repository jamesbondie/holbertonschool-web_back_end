#!/usr/bin/env python3
"""
This module provides an asynchronous comprehension and returns them as a list.
"""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Asynchronously async_generator and returns them as a list."""
    result = [i async for i in async_generator()]
    return result
