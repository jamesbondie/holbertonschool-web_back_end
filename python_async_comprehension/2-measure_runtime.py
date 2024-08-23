#!/usr/bin/env python3
"""
This module measures the runtime of executing using asyncio.
"""
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """Measures and returns the time taken to execute four comprehensions."""
    start_time = time.time()
    await asyncio.gather(async_comprehension(), async_comprehension(), async_comprehension(), async_comprehension())
    end_time = time.time()
    return end_time - start_time
