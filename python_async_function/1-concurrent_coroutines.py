#!/usr/bin/env python3
"""
This module provides an asynchronous function to wait for 'n' random delays and 
returns them in a sorted list.
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Asynchronously waits for 'n' random delays and returns a sorted list of these delays.
    """
    i = 0
    new_list = []
    while i < n:
        x = await wait_random(max_delay)
        new_list.append(x)
        i += 1
    return sorted(new_list)
