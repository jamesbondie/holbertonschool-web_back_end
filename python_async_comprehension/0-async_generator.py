#!/usr/bin/env python3
"""
This module yields random values between 1 and 10 every iterations.
"""
import random
import asyncio


async def async_generator():
    """Asynchronously yields values between 1 and 10 for 10 iterations."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(1, 10)
